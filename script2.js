// Global variables to track the state of checkboxes
var prevHalfBloodChecked = false;
var prevThinBloodChecked = false;
let bonusSelect;
let earnedSelect;

const elementOpposites = {
    Fire: 'Water',
    Water: 'Fire',
    Earth: 'Air',
    Air: 'Earth'
};

// Store created dropdowns
const createdDropdowns = {};

const classes = {
	Tactician: { path: 'Steel', role: 'Guardian', skillTrees: ['Enervation', 'Resilience', 'Command', 'Universal']},
	Battlemage: { path: 'Magic', role: 'Guardian', skillTrees: ['Brilliant Armor', 'Teamwork', 'Control', 'Universal'] },
	Oathbound: { path: 'Faith', role: 'Guardian', skillTrees: ['Resilience', 'Teamwork', 'Divine Protection', 'Universal'] },
	Shapeshifter: { path: 'Nature', role: 'Guardian', skillTrees: ['Brilliant Armor', 'Enervation', 'Shapeshifting', 'Universal'] },
	Adept: { path: 'Mind', role: 'Guardian', skillTrees: ['Avoidance', 'Enervation', 'Body Control', 'Universal'] },
	Chirurgeon: {path: 'Steel', role: 'Healer', skillTrees: ['Avoidance', 'Enervation', 'Field Medicine', 'Universal'] },
	Soultender: {path: 'Magic', role: 'Healer', skillTrees: ['Augmentation', 'Shielding', 'Soultending', 'Universal']},
	Cleric: {path: 'Faith', role: 'Healer', skillTrees: ['Healing', 'Teamwork', 'Holy Light', 'Invocation', 'Universal']},
	Animist: {path: 'Nature', role: 'Healer', skillTrees: ['Healing', 'Hexing', 'Spirit Lore', 'Universal']},
	Mender: {path: 'Mind', role: 'Healer', skillTrees: ['Healing', 'Shielding', 'Fateweaving', 'Universal']},
	MoA: {path: 'Steel', role: 'Aggressor', skillTrees: ['Resilience', 'Warcraft', 'Weapon Mastery', 'Archery', 'Universal']},
	Evoker: {path: 'Magic', role: 'Aggressor', skillTrees: ['Augmentation', 'Destruction', 'Evocation', 'Archery', 'Universal']},
	Dervish: {path: 'Faith', role: 'Aggressor', skillTrees: ['Warcraft', 'Destruction', 'Righteousness', 'Archery', 'Universal']},
	Scout: {path: 'Nature', role: 'Aggressor', skillTrees: ['Hexing', 'Warcraft', 'Terrain Mastery', 'Archery', 'Universal']},
	Mindblade: {path: 'Mind', role: 'Aggressor', skillTrees: ['Avoidance', 'Hexing', 'Blade Dancing', 'Archery', 'Universal']},
	Rogue: {path: 'Steel', role: 'Savant', skillTrees: ['Avoidance', 'Warcraft', 'Thievery', 'Archery', 'Universal']},
	Illusionist: {path: 'Magic', role: 'Savant', skillTrees: ['Augmentation', 'Hexing', 'Charm', 'Universal']},
	Chaplain: {path: 'Faith', role: 'Savant', skillTrees: ['Shielding', 'Teamwork', 'Sanctity', 'Universal']},
	Shaman: {path: 'Nature', role: 'Savant', skillTrees: ['Destruction', 'Teamwork', 'Elementalism', 'Universal']},
	Etherealist: { path: 'Mind', role: 'Savant', skillTrees: ['Hexing', 'Shielding', 'Phasing', 'Universal']},
};

const rituals = {
	Steel: ['Bulletin', 'Catapult', 'Honorable Burial', 'No One Left Behind', 'Rallying Speech', 'Scouts Eyes', 'Sergeants Oath'],
	Magic: ['Argentum', 'Comprehend Written Language', 'Consult Lore', 'Detect Object', 'Knock', 'Soul Binding', 'Teleportation Circle',],
	Faith: ['Abjure Curse', 'Atonement', 'Augury', 'Commune with the Fallen', 'Detect Person', 'Purify', 'Resurrection',],
	Nature: ['Barkskin', 'Cure Disease', 'Dowsing Rod', 'Manipulate Weather', 'Might of Trees', 'Natural Attunement', 'Summon Flock',],
	Mind: ['Ether Travel', 'Delve', 'Foresee', 'Magic Compass', 'Psychometry', 'Scry', 'Shield Form',],
	Fused: ['Commune with Nature', 'Holy Water', 'Sacred Banner', 'Open', 'Portal Sense', 'Vengeful Weapon', 'Zone of Simplicity',],
}

const skillTreeSkills = {
	"Archery": ["Accuracy", "Accuracy Upgrade", "Hail of Arrows", "Hail of Arrows Upgrade", "Killing Shot", "Killing Shot Upgrade"],
	"Augmentation": ["Confusion", "Confusion Upgrade", "Persistence", "Persistance Upgrade", "Resourcefulness(Final)", "Resourcefulness Upgrade"],
	"Avoidance": ["Blur of the Eye", "Blur of the Eye Upgrade", "Missed Me", "Missed Me Upgrade", "Smoke and Mirrors", "Smoke and Mirrors Upgrade"],
	"Blade Dancing": ["Manifest Weapon", "Manifest Weapon Upgrade", "Flow of Power", "Flow of Power Upgrade", "Razor Veil(Final)", "Razor Veil Upgrade"],
	"Body Control": ["Iron Skin", "Iron Skin Upgrade", "Training", "Training Upgrade", "Anticipation", "Anticipation Upgrade"],
	"Brilliant Armor": ["Force Buckler", "Force Buckler Upgrade", "Force Field", "Force Field Upgrade", "Shield Surge", "Shield Surge Upgrade"],
	"Charm": ["Instill", "Instill Upgrade", "Invisibility", "Invisibility Upgrade", "Command the Mind(Final)", "Command the Mind Upgrade"],
	"Command": ["Formation Training", "Formation Training Upgrade", "Rally", "Rally Upgrade", "Advanced Tactics", "Advanced Tactics Upgrade"],
	"Control": ['Wave of Emotion', 'Wave of Emotion Upgrade', 'Blast Wave', 'Blast Wave Upgrade', 'Aura of Power (Final)', 'Aura of Power (Final) Upgrade'],
	"Destruction": ['Force Bolt', 'Force Bolt Upgrade', 'Unerring', 'Unerring Upgrade', 'Meteor Swarm (Final)', 'Meteor Swarm (Final) Upgrade'],
	"Divine Protection": ['Oath of Protection', 'Oath of Protection Upgrade', 'Armor of Faith', 'Armor of Faith Upgrade', 'Grace of the Gods', 'Grace of the Gods Upgrade'],
	"Elementalism":['Elemental Connection', 'Elemental Connection Upgrade', 'Elemental Focus', 'Elemental Focus Upgrade', 'Channel Element', 'Channel Element Upgrade'],
	"Enervation":['Taunting Strike', 'Taunting Strike Upgrade', 'Nerve Strike', 'Nerve Strike Upgrade', 'Sudden Strike (Final)', 'Sudden Strike (Final) Upgrade'],
	"Evocation":['Torment Pulse', 'Torment Pulse Upgrade', 'Torment Lash', 'Torment Lash Upgrade', 'Torment Infusion', 'Torment Infusion Upgrade'],
	"Fateweaving":['Tangle Fate', 'Tangle Fate Upgrade', 'Tug Fates Strings', 'Tug Fates Strings Upgrade', 'Warnings in the Web', 'Warnings in the Web Upgrade'],
	"Field Medicine":['Bandaging', 'Bandaging Upgrade', 'Stimulant', 'Stimulant Upgrade', 'Emergency Treatment', 'Emergency Treatment Upgrade'],
	"Healing":['Soothing Touch', 'Soothing Touch Upgrade', 'Healing Surge', 'Healing Surge Upgrade', 'Word of Healing', 'Word of Healing Upgrade'],
	"Hexing":['Affliction', 'Affliction Upgrade', 'Pelting Stones', 'Pelting Stones Upgrade', 'Root', 'Root Upgrade'],
	"Holy Light":['Searing Light', 'Searing Light Upgrade', 'Turn', 'Turn Upgrade', 'Invoke Deity (Final)', 'Invoke Deity (Final) Upgrade'],
	"Invocation":['Invocation: The Brothers', 'Invocation: Gloriel', 'Invocation: Nivone', 'Invocation: Auran(Final)', 'Invocation: Avahlei', 'Invocation: Kora', 'Invocation: Laurela', 'Invocation: Lyla', 'Invocation: Noctus', 'Invocation: Maenir', "Invocation: SuhlSekh", 'Invocation: Thul', 'Invocation: Gorgath', 'Invocation: Sulith', 'Invocation: The Twins(Final)'],
	"Phasing": ['Ethereal Mastery', 'Ethereal Mastery Upgrade', 'Wormhole', 'Wormhole Upgrade', 'Mass Confusion', 'Mass Confusion Upgrade'],
	"Resilience": ['Combat Mastery', 'Combat Mastery Upgrade', 'Great Strength', 'Great Strength Upgrade', 'Resurgence', 'Resurgence Upgrade'],
	"Righteousness":['Spell Blade', 'Spell Blade Upgrade', 'Holy Light', 'Holy Light Upgrade', 'Blade of the Righteous (Final)', 'Blade of the Righteous (Final) Upgrade'],
	"Sanctity":['Invocation of Sanctuary', 'Invocation of Sanctuary Upgrade', 'Sacred Duty', 'Sacred Duty Upgrade', 'Strength of Faith', 'Strength of Faith Upgrade'],
	"Shapeshifting":['Body of the Beast', 'Body of the Beast Upgrade', 'Hunters Aura', 'Hunters Aura Upgrade', 'Apex Predator', 'Apex Predator Upgrade'],
	"Shielding":['Barrier', 'Barrier Upgrade', 'Cleanse', 'Cleanse Upgrade', 'Mirror', 'Mirror Upgrade'],
	"Soultending":['Vital Humors', 'Vital Humors Upgrade', 'Infuse Life', 'Infuse Life Upgrade', 'Dark Night of the Soul (Final)', 'Dark Night of the Soul (Final) Upgrade'],
	"Spirit Lore":['Spirit Strike', 'Spirit Strike Upgrade', 'Spirits Blessing', 'Spirits Blessing Upgrade', 'Spirit Dispatch', 'Spirit Dispatch Upgrade'],
	"Teamwork":['Empower', 'Empower Upgrade', 'I Recommend', 'I Recommend Upgrade', 'Push Your Limits', 'Push Your Limits Upgrade'],
	"Terrain Mastery":['Salamanders Fire', 'Salamanders Fire Upgrade (Final)', 'Talented Scout', 'Talented Scout Upgrade', 'Balanced Training', 'Balanced Training Upgrade'],
	"Thievery":['Deft Fingers', 'Deft Fingers Upgrade', 'Fast Talk, Fast Hands', 'Fast Talk, Fast Hands Upgrade', 'Flourish', 'Flourish Upgrade'],
	"Warcraft":['Precision', 'Precision Upgrade', 'Vicious Strikes', 'Vicious Strikes Upgrade', 'Killing Blow (Final)', 'Killing Blow (Final) Upgrade'],
	"Weapon Mastery":['Expertise', 'Expertise Upgrade', 'Technique', 'Technique Upgrade', 'Mastery', 'Mastery Upgrade'],
	"Universal":['Armor Training', 'Armor Training Upgrade', 'Combat Training', 'Combat Training Upgrade', 'Curious', 'Curious Upgrade', 'Knowledge', 'Knowledge Upgrade', 'Linguist', 'Linguist Upgrade', 'Magic Talent', 'Magic Talent Upgrade', 'Rare Linguist', 'Rare Linguist Upgrade', 'Lockpicking', 'Lockpicking Upgrade', "Rank", "Rank Upgrade", 'Rumors', 'Rumors Upgrade', 'Social Butterfly', 'Social Butterfly Upgrade',	'Tracker', 'Tracker Upgrade', 'Trap Finding', 'Trap Finding Upgrade', 'Artisan(Journeyman)', 'Artisan(Master)', 'Artisan(Grand Master)', 'Artisan(Exalted)', 'Craft(Journeyman)', 'Craft(Master)', 'Craft(Grand master)', 'Craft(Exalted)',],
	"Aetherite":['Elemental Bond', 'Elemental Flare'],
	"Celestine":['Divine Healing'],
	"Construct":['Sentinel', 'Armored Soul'],
	"Dhampir":['Blood Drain', 'Claws'],
	"Dragonkin":['Elemental Bond', 'Claws', 'Dragons Breath'],
	"Hill Dwarf":['Crafty', 'Stubborn'],
	"Mountain Dwarf":['Heritage'],
	"Dusk Elf":['Fade', 'Tracker'],
	"Moon Elf":['Hard to hit', 'Lunar Armor'],
	"Sun Elf":['Talent'],
	"Fellblooded":['Soul of Fire', 'Hellblast'],
	"Feytouched":['Mercurial Mind', 'Court-Marked'],
	"Formian":['Carapace', 'Acidic Blood', 'Scent Speech'],
	"Gnoll":['Thick Hide', 'Scent', 'Claws'],
	"Hiwani":['Adaptation', 'Claws'],
	"High Human":['Privilege'],
	"Low Human":['Martial'],
	"Orc":['Hard to Kill', 'Persistent'],
	"Sah'jann":['Elemental Bond', 'Master Linguist', 'Burst of Air'],
	"Shar'vin":['Crystalline Mind'],
	"Stoneborn":['Climber', 'Claws', 'Stone Skin'],
	"Waterborn":['Swimmer', 'Claws', 'Regeneration'],
    // More skill trees...
};



document.addEventListener('DOMContentLoaded', function() {
	bonusSelect = document.getElementById('bonusProgressionCount');
	earnedSelect = document.getElementById('earnedProgressionCount');
	const boughtRitualSelect = document.getElementById('boughtRitualCount');

    if (!bonusSelect || !earnedSelect) {
        console.error('Bonus or Earned Progression dropdown not found.');
        return;
    }

    // Generate options for both dropdowns
    [bonusSelect, earnedSelect].forEach(select => {
        for (let i = 0; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = option.textContent = i;
            select.appendChild(option);
        }
    });
	
		if (!boughtRitualSelect) {
		console.error('Bought Ritual Count dropdown not found.');
	} else {
		for (let i = 0; i <= 20; i++) {
			const option = document.createElement('option');
			option.value = option.textContent = i;
			boughtRitualSelect.appendChild(option);
		}

		boughtRitualSelect.addEventListener('change', handleBoughtRitualChange);
	}

    // Setup event delegation for all .skillSelect elements within the form
    const formElement = document.getElementById('characterForm');
    formElement.addEventListener('change', function(event) {
        if (event.target.classList.contains('skillSelect')) {
            logSkillDetailsAndPopulateOptions(event);
        }
    });

    // Unified handler for both bonus and earned progression changes
    bonusSelect.addEventListener('change', handleProgressionChange);
    earnedSelect.addEventListener('change', handleProgressionChange);
	boughtRitualSelect.addEventListener('change', handleBoughtRitualChange);
	
});

	function handleProgressionChange() {
		const bonus = parseInt(document.getElementById('bonusProgressionCount')?.value || 0);
		const earned = parseInt(document.getElementById('earnedProgressionCount')?.value || 0);
		const total = bonus + earned;

		const container = document.getElementById('bonusSkillSelectContainer');

		// Step 1: Store existing selections
		const previousSelections = {};
		Array.from(container.querySelectorAll('select')).forEach((dropdown, index) => {
			previousSelections[index] = dropdown.value;
		});

		// Step 2: Clear and rebuild dropdowns
		container.innerHTML = '';
		for (let i = 0; i < total; i++) {
			const newSelect = document.createElement('select');
			newSelect.className = 'skillSelect';
			newSelect.id = 'bonusSkillSelect' + i;
			newSelect.name = 'bonusSkillSelect' + i;

			// Step 3: Add default option (placeholder)
			const defaultOption = document.createElement('option');
			defaultOption.text = 'Choose skill?';
			defaultOption.value = '';
			defaultOption.disabled = true;
			newSelect.appendChild(defaultOption);

			// Step 4: Re-add skill options
			const selectedClass = document.getElementById('classSelect').value;
			const skillTreeNames = classes[selectedClass]?.skillTrees || [];
			skillTreeNames.forEach(skillTree => {
				let skills = skillTreeSkills[skillTree] || ["N/A"];
				skills.forEach(skill => {
					const option = document.createElement('option');
					option.value = `${skillTree}:${skill}`;
					option.textContent = skill;
					newSelect.appendChild(option);
				});
			});

			// Step 5: Restore previous selection if it existed
			if (previousSelections[i]) {
				newSelect.value = previousSelections[i];
			}

			container.appendChild(newSelect);
		}

		// Step 6: Update cost display for next bonus progression
		const costDisplay = document.getElementById('nextBonusProgressionCost');
		if (costDisplay) {
			const nextCost = 100 + bonus * 10;
			costDisplay.textContent = `Next Bonus Progression Cost: ${nextCost} XP`;
		}
	}

// Add event listener for character backgrounds
// Add event listeners for both backgrounds
document.getElementById('characterBackground').addEventListener('change', handleBackgroundSelection);
document.getElementById('characterBackground2').addEventListener('change', handleBackgroundSelection);

// Function to handle background selection, distinguishing between the two dropdowns
function handleBackgroundSelection(event) {
    const selectedBackground = event.target.value;
    const backgroundId = event.target.id;
    console.log(`Selected background (${backgroundId}): ${selectedBackground}`);

    // Mapping of backgrounds to specific skill tree/skill name
    const backgroundSkillMapping = {
        'Hermit2': 'Terrain Mastery:Talented Scout', // Example mapping; adjust based on your data
        'Thief': 'Thiefy:Thiefy',
    };

    // Check if the selected background requires special handling
    if (backgroundSkillMapping[selectedBackground]) {
        // Simulate an event object for logSkillDetailsAndPopulateOptions
        const customEvent = {
            target: {
                value: backgroundSkillMapping[selectedBackground],
                id: backgroundId // Add the backgroundId to the customEvent
            }
        };

        // Use the existing skill function to handle background-specific options
        logSkillDetailsAndPopulateOptions(customEvent);
    } else {
        // Handle backgrounds that don't need special skill logic
        console.log(`No special mechanics for ${selectedBackground} background.`);

        // Clear any existing dropdowns if no options are required for this background
        const existingDropdown = createdDropdowns[backgroundId];
        if (existingDropdown) {
            console.log(`Removing existing dropdown with ID: ${existingDropdown.id}`);
            existingDropdown.remove();
            delete createdDropdowns[backgroundId];
        } else {
            console.log(`No existing dropdown to remove for background ID: ${backgroundId}`);
        }
    }
}



// Add a single event listener for all elements with the 'skillSelect' class
document.querySelectorAll('.skillSelect').forEach(selectElement => {
    selectElement.addEventListener('change', logSkillDetailsAndPopulateOptions);
});

// Function to detect selected skill and print its object
function logSkillDetailsAndPopulateOptions(event) {
    const selectedValue = event.target.value;
    const [skillTree, skillName] = selectedValue.split(':');

    console.log(`Raw selected value: ${selectedValue}`);
    console.log(`Parsed skill tree: ${skillTree}`);
    console.log(`Parsed skill name: ${skillName || 'not provided'}`);

    // Remove existing dropdown if selection changes
    const existingDropdown = createdDropdowns[event.target.id];
    if (existingDropdown) {
        console.log(`Removing existing dropdown with ID: ${existingDropdown.id}`);
        existingDropdown.remove();
        delete createdDropdowns[event.target.id];
    } else {
        console.log('No existing dropdown to remove.');
    }

    // Create or get a unique dropdown by ID
    const getOrCreateDropdown = (id) => {
        let dropdown = document.getElementById(id);
        if (!dropdown) {
            console.log(`Creating new dropdown with ID: ${id}`);
            dropdown = document.createElement('select');
            dropdown.id = id;
            dropdown.className = 'skillSelect2'; // Assign skillSelect2 class
            document.getElementById('optionsContainer').appendChild(dropdown); // Assuming `optionsContainer` is the parent element
            createdDropdowns[event.target.id] = dropdown; // Track the created dropdown
        } else {
            console.log(`Found existing dropdown with ID: ${id}`);
        }
        return dropdown;
    };

    // Populate a dropdown with options
    const populateDropdown = (dropdown, options) => {
        console.log(`Populating dropdown with ID: ${dropdown.id} with options:`, options);
        dropdown.innerHTML = ''; // Clear existing options
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Option';
        dropdown.appendChild(defaultOption);

        options.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option;
            newOption.textContent = option.split(':').pop(); // Get the skill name only
            dropdown.appendChild(newOption);
        });

        dropdown.style.display = 'block';
        console.log(`Successfully populated dropdown with ID ${dropdown.id}`);
    };

    // Expand skill options, including skill trees
    const handleSkillOptions = (options) => {
        console.log('Handling skill options:', options);
        const expandedOptions = [];
        options.forEach(option => {
            if (skillsData[option]) { // Check if the option is another skill tree
                console.log(`Expanding skill tree: ${option}`);
                expandedOptions.push(...Object.keys(skillsData[option]).map(skill => `${option}:${skill}`));
            } else {
                expandedOptions.push(option);
            }
        });
        console.log('Expanded options:', expandedOptions);
        return expandedOptions;
    };

    // Handle the case where only a skill tree is specified
    if (skillTree && !skillName) {
        const skillsInTree = skillsData[skillTree];
        if (skillsInTree) {
            const options = Object.keys(skillsInTree).map(skill => `${skillTree}:${skill}`);
            console.log(`Options to populate in dropdown:`, options);

            const dropdown = getOrCreateDropdown(`skillOptionSelect_${skillTree}`);
            populateDropdown(dropdown, options);
        } else {
            console.log(`No skills found in the ${skillTree} skill tree.`);
        }
    }
    // Handle the case where both skill tree and skill name are specified
    else if (skillTree && skillName) {
        const skillsInTree = skillsData[skillTree];
        const skillObject = skillsInTree && skillsInTree[skillName];
        if (skillObject && skillObject.length > 0 && skillObject[0].options) {
            const options = handleSkillOptions(skillObject[0].options);
            console.log(`Expanded options for skill ${skillTree}:${skillName}:`, options);

            const dropdown = getOrCreateDropdown(`skillOptionSelect_${skillTree}_${skillName}`);
            populateDropdown(dropdown, options);
        } else {
            console.log(`No skill data found for ${skillTree}:${skillName}.`);
        }
    } else {
        console.log("Invalid skill selection.");
    }

    console.log(`Completed processing options for skill tree: ${skillTree}`);
}

function populateOptionsDropdown(dropdownId, options) {
    const select = document.getElementById(dropdownId);
    select.innerHTML = '<option value="">Select an Option</option>'; // Clear existing options
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option; // Option should already be formatted as "Tree:Name"
        optionElement.textContent = option.split(':')[1] || option; // Only display the name part if formatted as "Tree:Name"
        select.appendChild(optionElement);
    });
}
function toggleDropdownVisibility(dropdownId, isVisible) {
    const label = document.querySelector(`label[for="${dropdownId}"]`);
    const dropdown = document.getElementById(dropdownId);
    label.style.display = isVisible ? 'inline-block' : 'none';
    dropdown.style.display = isVisible ? 'inline-block' : 'none';
}

function updateClassDetails() {
    const selectedClass = document.getElementById('classSelect').value;
    const classDetails = classes[selectedClass];
    const skillTreeElement = document.getElementById('skillTrees');
    const excludedIds = [
        'thinBloodSkillSelect',
        'halfBloodSkillSelect1',
        'halfBloodSkillSelect2',
        'lineageSkillSelect',
        'secondLineageSkillSelect',
        'skillOptionSelect_Terrain Mastery_Talented Scout',
        'skillOptionSelect_Thiefy_Thiefy',
    ];

    // Reset skill tree display
    skillTreeElement.innerHTML = '';

    // Clear all dropdowns with the .skillSelect class except for excluded ones
    document.querySelectorAll('.skillSelect').forEach(selectElement => {
        if (!excludedIds.includes(selectElement.id)) {
            selectElement.innerHTML = '';
            const defaultOption = new Option('Select Option', '', true, true);
            selectElement.appendChild(defaultOption);
            selectElement.style.display = 'block';
        }
    });

    if (classDetails) {
        console.log('Path:', classDetails.path);
        console.log('Role:', classDetails.role);

        classDetails.skillTrees.forEach(tree => {
            const listItem = document.createElement('li');
            listItem.textContent = tree;
            skillTreeElement.appendChild(listItem);
        });

        // Update rituals available for the class path
        updateRitualOptions(classDetails.path);
		console.log('Calling ritual refresh for class:', selectedClass, 'with path:', classDetails.path);
        // Delay regeneration of bought ritual boxes to let dropdowns update
        setTimeout(() => {
            handleBoughtRitualChange();
        }, 0);
    }

    console.log("Updated class details and selectively cleared skill selection boxes.");
}

function updateRitualOptions(path) {
    // Elements for ritual selection (both boxes will now share the same options)
    const ritualSelectPath = document.getElementById('ritualSelect1');
    const ritualSelectFused = document.getElementById('ritualSelect2');

    // Clear existing options
    const initialOption = '<option value="">Select a Ritual</option>';
    ritualSelectPath.innerHTML = initialOption;
    ritualSelectFused.innerHTML = initialOption;

    // Retrieve path-specific rituals
    const pathRituals = rituals[path] || [];

    // Retrieve fused rituals
    const fusedRituals = rituals['Fused'] || [];

    // Combine both lists
    const combinedRituals = [...pathRituals, ...fusedRituals];

    // Populate both ritual dropdowns with the combined rituals
    combinedRituals.forEach(ritual => {
        const option = document.createElement('option');
        option.value = ritual;
        option.textContent = ritual;

        // Append option to both dropdowns
        ritualSelectPath.appendChild(option.cloneNode(true));
        ritualSelectFused.appendChild(option);
    });
}

function updateSkillOptions() {
    const excludedIds = ['thinBloodSkillSelect', 'halfBloodSkillSelect1', 'halfBloodSkillSelect2', 'lineageSkillSelect', 'secondLineageSkillSelect'];
    console.log("Excluded IDs:", excludedIds); // Debug: Log excluded IDs

    const selectedClass = document.getElementById('classSelect').value;
    const skillTreeNames = classes[selectedClass]?.skillTrees || [];
    const skillSelectElements = Array.from(document.getElementsByClassName('skillSelect'));

    console.log("Skill Select Elements Found:", skillSelectElements.map(select => select.id)); // Debug: Log all found select elements IDs

    skillSelectElements.forEach(select => {
        console.log("Checking select:", select.id); // Debug: Log each select being checked

        if (!excludedIds.includes(select.id)) {
            console.log("Updating:", select.id); // Debug: Confirm which are being updated
            select.innerHTML = ''; // Clear existing options

            const defaultOption = document.createElement('option');
            defaultOption.textContent = "Choose skill?";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            select.appendChild(defaultOption);

            skillTreeNames.forEach(skillTree => {
                let skills = skillTreeSkills[skillTree] || ["N/A"];
                skills.forEach(skill => {
                    const option = document.createElement('option');
                    option.value = skillTree + ':' + skill;
                    option.textContent = skill;
                    select.appendChild(option);
                });
            });
        } else {
            console.log("Excluded from update:", select.id); // Debug: Confirm which are excluded
        }
    });
}

function populateDropdown(dropdownId, skillTree, skills) {
    const select = document.getElementById(dropdownId);
    if (!select) {
        console.error('Dropdown not found:', dropdownId);
        return;
    }
    
    console.log(`Populating ${dropdownId} with skills from ${skillTree}:`, skills);

    skills.forEach(skill => {
        const option = document.createElement('option');
        option.value = `${skillTree}:${skill}`; // Maintain the correct format for value
        option.textContent = skill;
        select.appendChild(option);
    });
}

function clearAndPopulateDropdown(dropdownId, skillTree, skillsData) {
    const select = document.getElementById(dropdownId);
    if (!select) {
        console.error('Dropdown not found:', dropdownId);
        return;
    }

    select.innerHTML = ''; // Clear existing options
    console.log(`Populating ${dropdownId} with skills from ${skillTree}:`, skillsData);

    if (!skillsData || Object.keys(skillsData).length === 0) {
        console.error('No valid skills available for:', skillTree);
        const option = document.createElement('option');
        option.value = "N/A";
        option.textContent = "N/A";
        select.appendChild(option);
        return; // Avoid adding invalid or placeholder options
    }

    Object.entries(skillsData).forEach(([skillName, skillDetails]) => {
        if (Array.isArray(skillDetails)) {
            skillDetails.forEach(detail => {
                const option = createSkillOption(skillTree, skillName, detail);
                select.appendChild(option);
            });
        } else {
            const option = createSkillOption(skillTree, skillName, skillDetails);
            select.appendChild(option);
        }
    });
}

function getSkillsFromTrees(skillTreeNames) {
    let skills = [];
    skillTreeNames.forEach(treeName => {
        skills = [...new Set(skills.concat(skillTreeSkills[treeName] || ["N/A"]))]; // Ensures uniqueness
    });
    return skills;
}

function updateLineageOptions() {
    var lineage = document.getElementById('characterLineage').value;
    var secondLineageElement = document.getElementById('secondLineageSelect');
    var secondLineageValue = secondLineageElement.value;
    var elementSelection = document.getElementById('elementSelection');
    var courtSelection = document.getElementById('courtSelection');
    var halfBloodCheckbox = document.getElementById('halfBloodCheckbox').checked;
    var thinBloodCheckbox = document.getElementById('thinBloodCheckbox').checked;
    var secondLineageContainer = document.getElementById('secondLineage');

    // Hide all conditional sections initially and reset dropdowns
    elementSelection.style.display = 'none';
    courtSelection.style.display = 'none';
    secondLineageContainer.style.display = 'none';
    document.getElementById('thinBloodSelection').style.display = 'none';
    document.getElementById('halfBloodSelection1').style.display = 'none';
    document.getElementById('halfBloodSelection2').style.display = 'none';
    resetDropdown('halfBloodSkillSelect1');
    resetDropdown('halfBloodSkillSelect2');
    resetDropdown('thinBloodSkillSelect');

    // Display element selection if Aetherite or Dragonkin is selected in either dropdown
    if (lineage === 'Aetherite' || lineage === 'Dragonkin' ||
        secondLineageValue === 'Aetherite' || secondLineageValue === 'Dragonkin') {
        elementSelection.style.display = 'block';
    }

    // Display court selection if Feytouched is selected in either dropdown
    if (lineage === 'Feytouched' || secondLineageValue === 'Feytouched') {
        courtSelection.style.display = 'block';
    }

    // Display second lineage options and populate dropdowns if Half Blood is checked
    if (halfBloodCheckbox) {
        secondLineageContainer.style.display = 'block';
        document.getElementById('halfBloodSelection1').style.display = 'block';
        document.getElementById('halfBloodSelection2').style.display = 'block';
        populateHalfBloodDropdowns(lineage, secondLineageValue);
    } else {
        resetDropdown('halfBloodSkillSelect1');
        resetDropdown('halfBloodSkillSelect2');
    }

    // Display thin blood options and populate dropdown if Thin Blood is checked
    if (thinBloodCheckbox) {
        document.getElementById('thinBloodSelection').style.display = 'block';
        populateThinBloodDropdown(lineage);
    } else {
        resetDropdown('thinBloodSkillSelect');
    }
	// Call populateLineageOptions for the primary lineage dropdown
    populateLineageOptions(lineage, 'lineageSkillSelect');

    // Optionally, handle additional options for the secondary lineage
    if (halfBloodCheckbox) {
        populateLineageOptions(secondLineageValue, 'secondLineageSkillSelect');
	}
}

function resetDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.innerHTML = ''; // Clear existing options
        const option = document.createElement('option');
        option.value = "N/A";
        option.textContent = "N/A";
        dropdown.appendChild(option);
    }
}



// This function remains the same as before
function populateOptionsDropdown(dropdownId, optionsArray) {
    const dropdown = document.getElementById(dropdownId);

    if (!dropdown) {
        console.error(`Dropdown with ID ${dropdownId} not found.`);
        return;
    }

    dropdown.innerHTML = ''; // Clear existing options
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Option';
    dropdown.appendChild(defaultOption);

    console.log(`Options to be added to ${dropdownId}:`, optionsArray);

    // Ensure each option is displayed correctly
    optionsArray.forEach(option => {
        const newOption = document.createElement('option');
        
        newOption.value = String(option);
        newOption.textContent = String(option);

        dropdown.appendChild(newOption);
    });

    console.log(`Successfully populated dropdown with ID ${dropdownId}`);
}

// This function will be used when a lineage is selected.
function populateLineageOptions(lineage, dropdownId) {
    console.log(`Starting populateLineageOptions with lineage: ${lineage}, dropdownId: ${dropdownId}`);
    
    if (lineage !== 'None' && lineage) {
        const skills = skillsData[lineage] || {};
        console.log(`Fetched skills for lineage '${lineage}':`, skills);

        // Assuming only one skill object in lineage data
        const singleSkill = Object.values(skills)[0];

        if (singleSkill && singleSkill[0].options) {
            // Format options using "Universal" skill tree prefix
            const formattedOptions = singleSkill[0].options.map(option => `Universal:${option}`);
            console.log(`Formatted options for lineage '${lineage}' using Universal prefix:`, formattedOptions);

            populateOptionsDropdown(dropdownId, formattedOptions);
            console.log(`Dropdown '${dropdownId}' populated with Universal skill options.`);
        } else {
            console.log(`No skill options found for lineage '${lineage}'. Resetting dropdown '${dropdownId}'.`);
            resetDropdown(dropdownId); // Clear the dropdown if no options are found
        }
    } else {
        console.log(`Invalid or no lineage provided. Resetting dropdown '${dropdownId}'.`);
        resetDropdown(dropdownId); // Clear the dropdown if lineage is not valid
    }

    console.log(`Finished populateLineageOptions for dropdownId: ${dropdownId}`);
}

function resetDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    dropdown.innerHTML = ''; // Clear existing options
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Option';
    dropdown.appendChild(defaultOption);
}

function populateHalfBloodDropdowns(lineage, secondLineageValue) {
    const lineages = [lineage, secondLineageValue];
    lineages.forEach((lineage, index) => {
        if (lineage !== 'None' && lineage) {
            const skills = skillsData[lineage] || {};
            if (Object.keys(skills).length > 1) { // Check if there are more than one skill
                const dropdownId = `halfBloodSkillSelect${index + 1}`;
                clearAndPopulateDropdown(dropdownId, lineage, skills);
            } else {
                // Optionally handle the UI aspect here if there's only one skill
                const dropdownId = `halfBloodSkillSelect${index + 1}`;
                resetDropdown(dropdownId); // Clear the dropdown if only one skill is available
            }
        }
    });
}

function populateThinBloodDropdown(lineage) {
    if (lineage !== 'None' && lineage) {
        const skills = skillsData[lineage] || {};
        if (Object.keys(skills).length > 1) { // Check if there are more than one skill
            clearAndPopulateDropdown('thinBloodSkillSelect', lineage, skills);
        } else {
            // Optionally handle the UI aspect here if there's only one skill
            resetDropdown('thinBloodSkillSelect'); // Clear the dropdown if only one skill is available
        }
    }
}

function updateLineageSkillOptions(lineage) {
    const lineageSkills = skillsData[lineage] || {};
    Object.entries(lineageSkills).forEach(([skillName, skillDetails]) => {
        if (Array.isArray(skillDetails)) {
            skillDetails.forEach(detail => {
                if (detail.options) {
                    clearAndPopulateDropdown('lineageSkillOptionSelect', lineage, detail.options);
                }
            });
        } else if (skillDetails.options) {
            clearAndPopulateDropdown('lineageSkillOptionSelect', lineage, skillDetails.options);
        }
    });
}

function createSkillOption(skillTree, skillName, detail) {
    const option = document.createElement('option');
    option.value = `${skillTree}:${skillName}`;
    option.textContent = skillName + (detail.description ? ` - ${detail.description}` : '');
    return option;
}

function displaySkillDetails(skillName) {
    const details = skills[skillName];
    document.getElementById('skillDetail').innerHTML = `Use Type: ${details.useType}<br>Effect: ${details.effect}`;
}

function submitCharacterForm() {
    const form = document.getElementById('characterForm');
    let data = '';
    const selectedElement = document.getElementById('element').value;
    const selectedClass = document.getElementById('classSelect').value;
    const lineage = document.getElementById('characterLineage').value;
    const secondLineageValue = document.getElementById('secondLineageSelect').value;
    const halfBloodCheckbox = document.getElementById('halfBloodCheckbox').checked;
    const thinBloodCheckbox = document.getElementById('thinBloodCheckbox').checked;
    const invalidValues = ['', 'undefined (Details not available)', 'N/A'];

    // Save counts first
    data += `bonusProgressionCount: ${document.getElementById('bonusProgressionCount')?.value || '0'}\n`;
    data += `earnedProgressionCount: ${document.getElementById('earnedProgressionCount')?.value || '0'}\n`;
    data += `boughtRitualCount: ${document.getElementById('boughtRitualCount')?.value || '0'}\n`;

    // Basic form fields
    Array.from(form.elements).forEach(element => {
        if (element.name && element.type !== 'submit') {
            let value = element.type === 'checkbox' ? (element.checked ? 'Yes' : 'No') : element.value;
            if (!invalidValues.includes(value)) {
                data += `${element.name}: ${value}\n`;
            }
        }
    });

    // All skill dropdowns
    document.querySelectorAll('.skillSelect, .skillSelect2').forEach(select => {
        if (!['thinBloodSkillSelect', 'halfBloodSkillSelect1', 'halfBloodSkillSelect2'].includes(select.id)) {
            if (select && !invalidValues.includes(select.value)) {
                const [skillTree, skillName] = select.value.split(/:(.+)/);
                data = processSkillSelection(skillTree, skillName, data, selectedElement);
            }
        }
    });

    // Skill upgrades / option dropdowns
    document.querySelectorAll('[id^="skillOptionSelect_"]').forEach(select => {
        if (select && select.value && select.value !== 'N/A') {
            data += `${select.id}: ${select.value}\n`;
        }
    });

    // Bought ritual dropdowns
    const boughtCount = parseInt(document.getElementById('boughtRitualCount')?.value || 0);
    for (let i = 0; i < boughtCount; i++) {
        const ritual = document.getElementById(`boughtRitual${i}`)?.value;
        if (ritual && ritual !== '') {
            data += `boughtRitual${i}: ${ritual}\n`;
        }
    }

    // Lineage skills (only if not half/thin blood)
    if (!halfBloodCheckbox && !thinBloodCheckbox) {
        if (!invalidValues.includes(lineage)) {
            data += processLineageSkills(lineage, data, selectedElement);
        }
        if (!invalidValues.includes(secondLineageValue) && secondLineageValue !== lineage) {
            data += processLineageSkills(secondLineageValue, data, selectedElement);
        }
    }

    // Thin/Half Blood special selections
    if (thinBloodCheckbox) {
        data = processSpecialSelections(['thinBloodSkillSelect'], data, selectedElement, 'Thin Blood');
    }
    if (halfBloodCheckbox) {
        data = processSpecialSelections(['halfBloodSkillSelect1', 'halfBloodSkillSelect2'], data, selectedElement, 'Half Blood');
    }

    const filename = form.elements['characterName']?.value || 'CharacterSheet';
    downloadToFile(data, `${filename}.txt`, 'text/plain');
}

function processSkillSelection(skillTree, skillName, data, selectedElement) {
    const skillDetails = skillsData[skillTree] && skillsData[skillTree][skillName];
    if (skillDetails) {
        data += `Skill - ${skillName}:\n`;
        data = appendSkillDetails(data, skillDetails, selectedElement);
    } else {
        data += `Skill - ${skillName} (Details not available)\n`;
    }
    return data;
}

function processLineageSkills(lineage, data, selectedElement) {
    // Assuming each lineage may have multiple skills defined in the data structure
    let lineageData = '';
    const skills = skillTreeSkills[lineage];
    if (skills) {
        skills.forEach(skill => {
            lineageData += processSkillSelection(lineage, skill, '', selectedElement);
        });
    }
    return lineageData;
}

function processSpecialSelections(selectionIds, data, selectedElement, selectionType) {
    selectionIds.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select && select.value !== "N/A") {
            const [skillTree, skillName] = select.value.split(/:(.+)/);
            const skillDetails = skillsData[skillTree] && skillsData[skillTree][skillName];
            if (skillDetails) {
                data += `Skill - ${skillName} (${selectionType} selection):\n`;
                data = appendSkillDetails(data, skillDetails, selectedElement);
            }
        }
    });
    return data;
}

function appendSkillDetails(data, details, selectedElement) {
    if (Array.isArray(details)) {
        details.forEach(detail => {
            data += `  Use Type: ${detail.useType || 'Not specified'}\n`;
            let effect = detail.effect || 'Effect not specified';
            if (selectedElement && effect.includes('(element)')) {
                effect = effect.replace('(element)', selectedElement);
                effect = effect.replace('(opposing element)', elementOpposites[selectedElement]);
            }
            data += `  Effect: ${effect}\n`;

            if (detail.time) {
                data += `  Time: ${detail.time}\n`;
            }
            if (detail.deliveryType) {
                data += `  Delivery Type: ${detail.deliveryType || 'Not specified'}\n`;
            }
        });
    } else {
        data += `  Use Type: ${details.useType || 'Not specified'}\n`;
        let effect = details.effect || 'Effect not specified';
        if (selectedElement && effect.includes('(element)')) {
            effect = effect.replace('(element)', selectedElement);
            effect = effect.replace('(opposing element)', elementOpposites[selectedElement]);
        }
        data += `  Effect: ${effect}\n`;

        if (details.time) {
            data += `  Time: ${details.time}\n`;
        }
        if (details.deliveryType) {
            data += `  Delivery Type: ${details.deliveryType || 'Not specified'}\n`;
        }
    }
    return data;
}

function downloadToFile(content, filename, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
}

function loadFromFile() {
    const fileInput = document.getElementById("charFile");
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const parsedData = parseCharacterText(e.target.result);
        applyCharacterData(parsedData);
    };
    reader.readAsText(file);
}

// Parse character data from text file (up to ritualSelect2)
function parseCharacterText(text) {
    const lines = text.split('\n');
    const data = {};
    for (let line of lines) {
        if (line.trim() === "") continue;
        const [key, ...rest] = line.split(':');
        if (key && rest.length > 0) {
            data[key.trim()] = rest.join(':').trim();
        }
    }
    return data;
}
// Inject parsed values into the form
function applyCharacterData(charData) {
    const booleanFields = ['halfBloodCheckbox', 'thinBloodCheckbox'];

    Object.entries(charData).forEach(([key, value]) => {
        const element = document.getElementById(key);
        if (!element) return;

        if (booleanFields.includes(key)) {
            element.checked = value === 'Yes';
        } else {
            element.value = value;
        }

        if (key === 'characterLineage' || key === 'secondLineageSelect' || key === 'halfBloodCheckbox' || key === 'thinBloodCheckbox') {
            updateLineageOptions();
        }

        if (key === 'classSelect') {
            updateClassDetails();
            updateSkillOptions();
        }
    });

    const bonus = parseInt(charData.bonusProgressionCount || 0);
    const earned = parseInt(charData.earnedProgressionCount || 0);
    const total = bonus + earned;
    if (total > 0) {
        setTimeout(() => {
            handleProgressionChange();
            for (let i = 0; i < total; i++) {
                const id = `bonusSkillSelect${i}`;
                if (charData[id]) {
                    const el = document.getElementById(id);
                    if (el) {
                        el.value = charData[id];
                        el.dispatchEvent(new Event('change'));

                        // NEW: Manually simulate what a user would do
                        logSkillDetailsAndPopulateOptions({ target: el });
                    }
                }
            }
        }, 0);
    }

    const boughtCount = parseInt(charData.boughtRitualCount || 0);
    if (boughtCount > 0) {
        setTimeout(() => {
            handleBoughtRitualChange();
            for (let i = 0; i < boughtCount; i++) {
                const id = `boughtRitual${i}`;
                if (charData[id]) {
                    const el = document.getElementById(id);
                    if (el) {
                        el.value = charData[id];
                    }
                }
            }
        }, 50);
    }

    // Handle skill options AFTER the skills are added and dropdowns generated
    Object.entries(charData).forEach(([key, value]) => {
        if (key.startsWith('skillSelect')) {
            const el = document.getElementById(key);
            if (el) {
                setTimeout(() => {
                    el.value = value;
                    el.dispatchEvent(new Event('change'));
                    logSkillDetailsAndPopulateOptions({ target: el }); // 💥 Ensures dropdowns get built
                }, 50);
            }
        }

        if (key.startsWith('skillOptionSelect_')) {
            const trySet = () => {
                const dropdown = document.getElementById(key);
                if (dropdown) {
                    dropdown.value = value;
                } else {
                    console.warn("Dropdown not found at time of assignment:", key);
                }
            };
            setTimeout(trySet, 100);
        }
    });

    console.log("Character loaded:", charData);
}