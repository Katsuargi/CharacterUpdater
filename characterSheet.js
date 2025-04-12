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
    console.log("🟡 Parsed skills array:", parsedSkills);

    // Character info section
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

    // Table mapping
    const tableMap = {
        0: 'skillTree1',
        1: 'skillTree2',
        2: 'skillTree3',
        Universal: 'universalSkills',
        Lineage: 'lineageSkills',
        Unique: 'uniquePowerTableBody',
    };

    let treeIndex = 0;
    const assignedTables = {};

    parsedSkills.forEach(skillGroup => {
        const tree = skillGroup.tree;

        let tableId;
        if (tree === 'Universal') {
            tableId = tableMap.Universal;
        } else if (tree === 'Unique') {
            tableId = tableMap.Unique;
            document.getElementById('uniquePowerSection').classList.remove('hidden');
        } else {
            if (!assignedTables[tree]) {
                tableId = tableMap[treeIndex++];
                assignedTables[tree] = tableId;

                // Rename the header to the skill tree name
                const header = document.querySelector(`#${tableId}`).previousElementSibling;
                if (header && header.tagName === 'H2') {
                    header.textContent = tree;
                }
            }
            tableId = assignedTables[tree];
        }

        const tbody = document.querySelector(`#${tableId} tbody`);
        if (!tbody) {
            console.warn(`❌ Could not find tbody for tableId: ${tableId}`);
            return;
        }

        skillGroup.skills.forEach((skill, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index === 0 || skill.name !== skillGroup.skills[index - 1]?.name ? `<strong>${skill.name}</strong>` : ''}</td>
                <td>${skill.type || ''}</td>
                <td>${skill.effect || ''}</td>
                <td>${skill.time || ''}</td>
                <td>${skill.delivery || ''}</td>
            `;
            tbody.appendChild(row);
        });
    });

    console.log("✅ Finished populating skills.");
    console.log("✅ Populated printable sheet with character data:", charData);
}

function parseSkillsFromCharacterData(charData, selectedElement) {
    console.log("🔍 Parsing skills from character data...");
    const skillEntries = [];

    for (const [key, value] of Object.entries(charData)) {
        // Match both standard and bonus skill selects
        if (
            !(key.startsWith('skillSelect') || key.startsWith('bonusSkillSelect') || key.startsWith('lineageSkillSelect'))
        ) continue;

        console.log(`🧩 Found skill key: ${key} with value: ${value}`);

        const [skillTree, skillName] = value.split(/:(.+)/);
        if (!skillTree || !skillName) continue;

        const rawSkill = skillsData[skillTree]?.[skillName];
        const entries = [];

        if (Array.isArray(rawSkill)) {
            rawSkill.forEach(detail =>
                entries.push(formatSkillDetail(skillName, detail, selectedElement))
            );
        } else if (rawSkill) {
            entries.push(formatSkillDetail(skillName, rawSkill, selectedElement));
        } else {
            console.warn(`⚠️ No skill data found for: ${skillTree}:${skillName}`);
        }

        skillEntries.push({
            tree: skillTree,
            name: skillName,
            skills: entries
        });
    }

    console.log("📦 Final parsed skills array:", skillEntries);
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