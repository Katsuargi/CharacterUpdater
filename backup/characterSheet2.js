document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const encodedData = params.get('data');
    if (!encodedData) {
        console.warn("No character data passed.");
        return;
    }

    try {
        const decoded = decodeURIComponent(atob(encodedData));
        const charData = JSON.parse(decoded);
        populatePrintableSheet(charData);
    } catch (error) {
        console.error("Failed to parse character data:", error);
    }
});

function populatePrintableSheet(charData) {
    const get = id => document.getElementById(id);
    const selectedElement = charData.element || '';
    const parsedSkills = parseSkillsFromCharacterData(charData, selectedElement);

    if (!charData) {
        console.warn("No data passed to populatePrintableSheet");
        return;
    }

    get('printCharacterName').textContent = charData.characterName || '';
    get('printPlayerName').textContent = charData.playerName || '';
    get('printEmail').textContent = charData.playerEmail || '';
    get('printStanding').textContent = charData.characterStanding || '';
    get('printClass').textContent = charData.classSelect || '';
    get('printLineage').textContent = charData.characterLineage || '';
    get('printSecondLineage').textContent = charData.secondLineageSelect ? `, ${charData.secondLineageSelect}` : '';
    get('printElement').textContent = charData.element || '';
    get('printDiety').textContent = charData.diety || '';
    get('printPronouns').textContent = charData.playerPronouns || '';
    get('printBackground').textContent = `${charData.characterBackground || ''}${charData.characterBackground2 ? ', ' + charData.characterBackground2 : ''}`;
    get('printPath').textContent = charData.path || '';
    get('printRole').textContent = charData.role || '';

    const treeSlots = {};
    const availableSlots = ['skillTree1', 'skillTree2', 'skillTree3'];

    for (const [key, value] of Object.entries(charData)) {
        if (!key.startsWith('Skill -')) continue;

        const matches = key.match(/Skill - ([^(]+)(?: \(([^)]+)\))?/);
        if (!matches) continue;

        const name = matches[1].trim();
        const source = matches[2] || '';

        let foundTree = null;
        let detailEntries = [];

        for (const [treeName, skills] of Object.entries(skillsData)) {
            if (skills[name]) {
                foundTree = treeName;
                const raw = skills[name];
                detailEntries = Array.isArray(raw) ? raw : [raw];
                break;
            }
        }

        if (!foundTree && source === 'Lineage') {
            const row = createSkillRow({ name, useType: '', effect: value });
            document.querySelector('#lineageSkills tbody')?.appendChild(row);
            console.log(`Added lineage skill row: ${name}`);
            continue;
        }

        if (!foundTree && source === 'Unique') {
            const row = createSkillRow({ name, useType: '', effect: value });
            document.querySelector('#uniquePowerTableBody')?.appendChild(row);
            document.getElementById('uniquePowerSection').classList.remove('hidden');
            console.log(`Added unique skill row: ${name}`);
            continue;
        }

        if (!foundTree) {
            console.warn(`Could not find tree for skill ${name}`);
            continue;
        }

        if (foundTree === 'Universal') {
            const tbody = document.querySelector('#universalSkills tbody');
            detailEntries.forEach(entry => {
                const row = createSkillRow(formatSkillDetail(name, entry, selectedElement));
                tbody?.appendChild(row);
                console.log(`Added Universal skill: ${name}`);
            });
        } else {
            if (!treeSlots[foundTree]) {
                const slot = availableSlots.shift();
                if (!slot) {
                    console.warn(`No slot available for tree: ${foundTree}`);
                    continue;
                }

                treeSlots[foundTree] = slot;
                const section = document.querySelector(`#${slot}`)?.closest('.section');
                if (section) section.querySelector('h2').textContent = foundTree;
                else console.warn(`Could not rename section for ${slot}`);
            }

            const slot = treeSlots[foundTree];
            const tbody = document.querySelector(`#${slot} tbody`);
            if (!tbody) {
                console.warn(`Could not find table body for ${slot}`);
                continue;
            }

            detailEntries.forEach(entry => {
                const row = createSkillRow(formatSkillDetail(name, entry, selectedElement));
                tbody.appendChild(row);
                console.log(`Added skill ${name} to ${foundTree} → ${slot}`);
            });
        }
    }

    console.log("Populated printable sheet with character data:", charData);
}

function parseSkillsFromCharacterData(charData, selectedElement) {
    const skillEntries = [];

    for (const [key, value] of Object.entries(charData)) {
        if (!key.startsWith('skillSelect')) continue;

        const [skillTree, skillName] = value.split(/:(.+)/);
        if (!skillTree || !skillName) continue;

        const rawSkill = skillsData[skillTree]?.[skillName];
        const entries = [];

        if (Array.isArray(rawSkill)) {
            rawSkill.forEach(detail => entries.push(formatSkillDetail(skillName, detail, selectedElement)));
        } else if (rawSkill) {
            entries.push(formatSkillDetail(skillName, rawSkill, selectedElement));
        }

        skillEntries.push({
            tree: skillTree,
            skills: entries
        });
    }

    return skillEntries;
}

function formatSkillDetail(name, detail, selectedElement) {
    let effect = detail.effect || '';
    if (selectedElement && effect.includes('(element)')) {
        effect = effect.replace('(element)', selectedElement)
                       .replace('(opposing element)', elementOpposites[selectedElement]);
    }

    return {
        name,
        type: detail.useType || '',
        effect,
        time: detail.time || '',
        delivery: detail.deliveryType || ''
    };
}

function createSkillRow({ name, useType, effect, time = '', deliveryType = '' }) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${useType || ''}</td>
        <td>${effect || ''}</td>
        <td>${time || ''}</td>
        <td>${deliveryType || ''}</td>
    `;
    return row;
}