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

    // Basic field population
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
    // Set up table references
    const treeTables = {
        0: 'skillTree1',
        1: 'skillTree2',
        2: 'skillTree3',
        Universal: 'universalSkills',
        Lineage: 'lineageSkills',
        Unique: 'uniquePowerTableBody',
    };

    let usedTables = 0;
    const treeCounts = {};

    // Loop through character data to extract skill text blocks
    for (const [key, value] of Object.entries(charData)) {
        if (!key.startsWith('Skill -')) continue;

        const matches = key.match(/Skill - ([^(]+)(?: \(([^)]+)\))?/);
        if (!matches) continue;

        const name = matches[1].trim();
        const source = matches[2] || '';

        let found = false;

        for (const [tree, skills] of Object.entries(skillsData)) {
            // Exact or fuzzy skill name match
			let matchingKey = Object.keys(skills).find(keyName => {
				const normalizedKey = keyName.replace(/\s*\(.*?\)\s*/g, '').trim().toLowerCase();
				const normalizedName = name.replace(/\s*\(.*?\)\s*/g, '').trim().toLowerCase();
				return normalizedKey === normalizedName;
			});
            if (matchingKey) {
                const entries = Array.isArray(skills[matchingKey]) ? skills[matchingKey] : [skills[matchingKey]];

                entries.forEach((entry, idx) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${idx === 0 ? `<strong>${matchingKey}</strong>` : ''}</td>
                        <td>${entry.useType || ''}</td>
                        <td>${entry.effect || ''}</td>
                        <td>${entry.time || ''}</td>
                        <td>${entry.deliveryType || ''}</td>
                    `;

                    let tableId;
                    if (tree === 'Universal') {
                        tableId = 'universalSkills';
                    } else if (!treeCounts[tree]) {
                        tableId = treeTables[usedTables++];
                        treeCounts[tree] = tableId;

                        const header = document.querySelector(`#${tableId}`).previousElementSibling;
                        if (header && header.tagName === 'H2') {
                            header.textContent = tree;
                        }
                    } else {
                        tableId = treeCounts[tree];
                    }

                    const tbody = document.querySelector(`#${tableId} tbody`);
                    if (tbody) {
                        tbody.appendChild(row);
                    }
                });

                found = true;
                break;
            }
        }

        if (!found && source === 'Lineage') {
            const row = createSkillRow({ name, useType: '—', effect: value });
            document.querySelector('#lineageSkills tbody').appendChild(row);
        }

        if (!found && source === 'Unique') {
            const row = createSkillRow({ name, useType: '—', effect: value });
            document.querySelector('#uniquePowerTableBody').appendChild(row);
            document.getElementById('uniquePowerSection').classList.remove('hidden');
        }
    }

    console.log("Populated printable sheet with character data:", charData);
}

function parseSkillsFromCharacterData(charData, selectedElement) {
    console.log("Parsing skills from character data...");
    const skillEntries = [];

    for (const [key, value] of Object.entries(charData)) {
        if (!key.startsWith('skillSelect')) continue;

        console.log("Found skill key:", key, "with value:", value);

        const [skillTree, skillName] = value.split(/:(.+)/);
        if (!skillTree || !skillName) {
            console.warn("Malformed skill entry:", value);
            continue;
        }

        const rawSkill = skillsData[skillTree]?.[skillName];
        if (!rawSkill) {
            console.warn("Skill not found in skillsData:", skillTree, skillName);
            continue;
        }

        const entries = Array.isArray(rawSkill)
            ? rawSkill.map(detail => formatSkillDetail(skillName, detail, selectedElement))
            : [formatSkillDetail(skillName, rawSkill, selectedElement)];

        skillEntries.push({ tree: skillTree, skills: entries });
    }

    console.log("Final parsed skills array:", skillEntries);
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