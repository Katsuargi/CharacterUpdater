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
	get('printSecondLineage').textContent = charData.secondLineageSelect 
    ? `, ${charData.secondLineageSelect}` 
    : '';
    get('printElement').textContent = charData.element || '';
    get('printDiety').textContent = charData.diety || '';
    get('printPronouns').textContent = charData.playerPronouns || '';
	get('printBackground').textContent = `${charData.characterBackground || ''}${charData.characterBackground2 ? ', ' + charData.characterBackground2 : ''}`;

    // More population code will go here soon for skills, rituals, crafts, orgs, etc.
    
    console.log("Populated printable sheet with character data:", charData);
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