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

	// First, parse normal/universal skills as originally done:
	const parsedSkills = parseSkillsFromCharacterData(charData, selectedElement);
	console.log("🟡 Parsed skills array:", parsedSkills);

	// Populate top character details
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

	const tableMap = {
		0: 'skillTree1',
		1: 'skillTree2',
		2: 'skillTree3',
		3: 'skillTree4',
		Universal: 'universalSkills',
		Lineage: 'lineageSkills',
		Craft: 'craftSkills',
		Unique: 'uniquePowerTableBody',
		Invocation: 'invocationTable',
	};

	let treeIndex = 0;
	const assignedTables = {};

	// Populate normal, universal, craft, unique skills
	parsedSkills.forEach(skillGroup => {
		const tree = skillGroup.tree;
		let tableId;

		// Re-route universal crafts to craft table
		const isCraft = tree === 'Universal' && skillGroup.skills[0]?.name?.match(/^(Craft|Artisan)\(/);

		if (isCraft) {
			tableId = tableMap.Craft;
		} else if (tree === 'Invocation') {
			tableId = tableMap.Invocation;
			document.getElementById('invocationSection').classList.remove('hidden');
		} else if (tree === 'Universal') {
			tableId = tableMap.Universal;
		} else if (tree === 'Unique') {
			tableId = tableMap.Unique;
			document.getElementById('uniquePowerSection').classList.remove('hidden');
		} 
		
			else {
			if (!assignedTables[tree]) {
				tableId = tableMap[treeIndex++];
				assignedTables[tree] = tableId;

				const header = document.querySelector(`#${tableId}`).previousElementSibling;
				if (header && header.tagName === 'H2') {
					header.textContent = tree;
				}
			}
			tableId = assignedTables[tree];
		}

		const tbody = document.querySelector(`#${tableId} tbody`);
		if (!tbody) return;

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
	
	// Show skillTree4Wrapper if anything was added to it
	if (document.querySelector('#skillTree4 tbody')?.children.length > 0) {
		document.getElementById('skillTree4Wrapper').style.display = 'block';
	} else {
		document.getElementById('skillTree4Wrapper').style.display = 'none';
	}

	// Lineage skills: Normal, Thin, Half Blood
	const lineageSources = ['lineageSkills', 'secondLineageSkills', 'thinBloodSkills', 'halfBloodSkills'];
	lineageSources.forEach(key => {
		const rawText = charData[key];
		if (!rawText) return;

		const matches = rawText.match(/Skill - ([^(]+)(?: \(([^)]+)\))?:/g);
		if (!matches) return;

		matches.forEach(match => {
			const skillName = match.match(/Skill - ([^(]+)(?: \(([^)]+)\))?/)[1]?.trim();
			const tree = Object.keys(skillsData).find(tree =>
				skillsData[tree][skillName]
			);

			if (tree) {
				const skill = skillsData[tree][skillName];
				const entries = Array.isArray(skill) ? skill : [skill];

				entries.forEach((entry, i) => {
					const row = document.createElement('tr');
					row.innerHTML = `
						<td>${i === 0 ? `<strong>${skillName}</strong>` : ''}</td>
						<td>${entry.useType || ''}</td>
						<td>${entry.effect || ''}</td>
						<td>${entry.time || ''}</td>
						<td>${entry.deliveryType || ''}</td>
					`;
					document.querySelector(`#${tableMap.Lineage} tbody`).appendChild(row);
				});
			}
		});
	});

	console.log("✅ Finished populating skills and lineage.");
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