const skillsData = {
    "Archery": {
        "Accuracy": {
            useType: 'S',
            effect: 'Add 3 Projectile weapons'
        },
        "Accuracy Upgrade": {
            useType: 'D',
            effect: 'You may call your current Projectile weapon damage as a Point and Click against a single target if you miss or they Dodge a Projectile attack'
        },
        "Hail of Arrows": [
            {
                useType: 'D',
                effect: 'You may call double your current Projectile weapon as a Blast.',
                wait: '30'
            },
            {
                useType: 'D',
                effect: 'You may call double your current Projectile weapon as a Blast.',
                wait: '30'
            }
        ],
        "Hail of Arrows Upgrade": {
            useType: 'R',
            effect: 'When using Hail of Arrows, instead of calling double your current Projectile weapon as a Blast, you may Convert Bypass.'
        },
        "Killing Shot (Final)": {
            useType: 'E',
            effect: 'Substitute 50 Bypass',
            deliveryType: 'Projectile'
        },
        "Killing Shot Upgrade": {
            useType: 'E',
            effect: 'Substitute 50 Bypass',
            deliveryType: 'Projectile'
        }
    },
	"Augmentation": {
        "Confusion": {
			useType: 'D',
            effect: "Gain a Reflect.",
        },
        "Confusion Upgrade": {
			useType: 'R',
            effect: "Whenever you Dodge, Phase, or Reflect, you may call Weakness 10 seconds.",
            deliveryType: "MP&C"
        },
        "Persistence": {
			useType: 'D',
            effect: "Chosen other ally Refreshes a single piece of a Difficult power.",
            deliveryType: "Touch"
        },
        "Persistence Upgrade": {
			useType: 'E',
            effect: "Choose up to three consumable items that could be made into Elite preparations. For the duration of the Day, they function as Elite for you only.",
        },
        "Resourcefulness (Final)": {
			useType: 'E',
            effect: "Choose one of the following effects: Substitute 25 Bypass, Swing/Projectile, Touch, chosen other ally Heals to Half their Max HP, Self, Gain 20 Temporary HP, Self, Out of Game for up to 1 minute, Reduce the number of pulls in an RP Dungeon by 2"
        },
        "Resourcefulness Upgrade": {
			useType: 'E',
            effect: "Chosen other ally receives one use of any single effect produced by Resourcefulness, which must be selected when you use this power. This effect may be used any time this Day.",
        }
    },
	"Avoidance": {
		"Blur of the Eye": {
			useType: "D",
			effect: "Go out of game for up to 30 seconds.",
		},
		"Blur of the Eye Upgrade": {
			useType: "D",
			effect: "Resist a status effect.",
		},
		"Missed Me": {
			useType: "D",
			effect: "Gain 5 temporary HP and one Dodge.",
		},
		"Missed Me Upgrade": {
			useType: "D",
			effect: "Gain a phase.",
		},
		"Smoke and Mirrors": [
			{
				useType: "E",
				effect: "Gain two uses of Phase.",
			},
			{
				useType: "E",
				effect: "Gain two uses of Reflect against Melee attacks.",
			}
		],
		"Smoke and Mirrors Upgrade": {
			useType: "E3",
			effect: "You resist all non-bypass bursts and blasts.",
		}
	},
	"Blade Dancing": {
		"Manifest Weapon": [
			{
				useType: "R",
				effect: "You may wield up to two identical one-handed melee weapons or one two-handed melee weapon. These weapons are called Mind Blades, even if they are not edged weapons. You may choose to dispel your Mind Blades and summon new ones, with a Wait time of 10 seconds. All Mind Blades Convert Spirit.",
			},
			{
				useType: "S",
				effect: "Your Mind Blades can block non-Bypass Packets (Call Resist)and are Immune to Disarm.",
			}				
				
		],
		"Manifest Weapon Upgrade": [
			{
				useType: "S",
				effect: "Your Mind Blades are of Quality.",
			},
			{
				useType: "D",
				effect: "Gain an Armor Resist or Add 1 Mind Blades."
			}
		],
		"Flow of Power": {
			useType: "R",
			effect: "Whenever you Dodge, Phase, or Reflect, Add 1 with your Mind Blades for the Encounter. You cannot receive more than Add 3 from Flow of Power.",
		},
		"Flow of Power Upgrade": {
			useType: "R",
			effect: "Whenever you use Flow of Power, you may Heal 5.",
		},
		"Razor Veil(Final)": 
		{
			useType: "E",
			effect: "You strike all opponents in a whirl of small psychic baldes. Call All enemies 15 Bypass",
		},
		"Razor Veil Upgrade": {
			useType: "E",
			effect: "Call Razor's edge. Add 2 All for this encounter.",
		}
	},
	"Body Control": {
		"Iron Skin": {
			useType: 'S',
			effect: 'You receive two uses of the Armor Training power in the Universal tree for free. You must use makeup or another phys-rep on your skin to receive this benefit.'
		},
		"Iron Skin Upgrade": {
			useType: 'S',
			effect: 'Every time you hit a multiple of +15 Max HP over your starting HP, you receive an additional Armor Resist each Encounter.'
		},
		"Training": [
			{
				useType: 'D',
				effect: 'Gain 2 Feats of Strength.'
			},
			{
				useType: 'D',
				effect: 'Gain 2 Dodges.'
			},
			{
				useType: 'D',
				effect: 'Resist a Status Effect.'
			}
		],
		"Training Upgrade": {
			useType: 'R',
			effect: 'Whenever you Dodge, Phase, or Reflect, you may call Stun 10 seconds as a Melee Point and Click.'
		},
		"Anticipation": [
			{
				useType: 'E',
				effect: 'Resist an attack. Refresh a single piece of a Difficult or Exhausting power.'
			},
			{
				useType: 'E',
				effect: 'Resist an attack. Refresh a single piece of a Difficult or Exhausting power.'
			}
		],
		"Anticipation Upgrade": {
			useType: 'R',
			effect: 'Whenever you use Anticipation, Heal 10 and gain 1 Phase.'
		}
	},
	"Brilliant Armor": {
		"Force Buckler": {
			useType: 'S',
			effect: 'Gain a normal-sized buckler made of magical force. This buckler can block non-Bypass Packets (Call Resist) and is Immune to Disarm.'
		},
		"Force Buckler Upgrade": {
			useType: 'S',
			effect: 'Gain +5 Max HP.'
		},
		"Force Field": {
			useType: 'D',
			effect: 'Gain 10 Temporary HP.'
		},
		"Force Field Upgrade": {
			useType: 'D',
			effect: 'Resist a Status Effect.'
		},
		"Shield Surge": [
			{
				useType: 'E',
				effect: 'Gain 20 Temporary HP.'
			},
			{
				useType: 'E',
				effect: 'Gain 20 Temporary HP.'
			}
		],
		"Shield Surge Upgrade": {
			useType: 'E',
			effect: 'Call “All Allies gain 2 Armor Resists!”. Alternately, you may call “Mass Shield!” (explain this to your allies beforehand so they understand what this does).'
		}
	},
	"Charm":{
	    "Instill": [
			{
				useType: 'R',
				effect: 'Call Slow 10 seconds.',
				cast: '5',
				deliveryType: 'MP&C'
			},
			{
				useType: 'R',
				effect: 'Heal 5. (This power cannot target you)',
				wait: '30',
				deliveryType: 'Touch'
			}
		],
		"Instill Upgrade": {
			useType: 'E',
			effect: 'Gain Immune to a Status Effect of your choice for this Day.'
		},
		"Invisibility": {
			useType: 'D',
			effect: 'While taking no actions except for speaking or moving, you become invisible. Put a hand or weapon over your head. This effect ends after 60 seconds, but you may end it earlier.'
		},
		"Invisibility Upgrade": {
			useType: 'S',
			effect: 'Fair Escape costs you ½ Influence. You may still only invoke Fair Escape once per Day.'
		},
		"Command the Mind (Final)": {
			useType: 'E',
			effect: 'Call Dominate 60 seconds or Bypass Dominate 30 seconds.',
			deliveryType: 'Point and Click'
		},
		"Command the Mind Upgrade": {
			useType: 'D',
			effect: 'Change your appearance to that of a generic member (of any gender) of a humanoid lineage of your approximate size. This is an illusion and does not alter your actual body. You may not imitate a specific person or being.'
		}
	},
	"Command":{
		"Formation Training": [
			{
				"useType": "S",
				"effect": "You may use kite shields (or shields of a similar size). In Encounters where you do, your damage with weapons is reduced to 3 (instead of 4)."
			},
			{
				"useType": "S",
				"effect": "While in a line, you and any allies in melee range of you are Immune to Bursts that inflict non-Bypass damage or effects."
			}
		],
		"Formation Training Upgrade": [
			{
				"useType": "S",
				"effect": "Gain +5 Max HP when using a shield."
			},
			{
				"useType": "S",
				"effect": "Other allies fighting in a line with you Add 2 to all damage calls."
			}
		],
		"Rally": [
			{
				"useType": "D",
				"effect": "You may call a Hold and place up to 5 target allies anywhere within  30 feet of you. A target may choose to refuse your orders.",
				"deliveryType": "P&C"
			}
		],
		"Rally Upgrade": [
			{
				"useType": "E!",
				"effect": "Choose a phrase. This Event, any ally within line of sight of you may yell the  chosen phrase once per Day to Heal 15. It must be approved by an Organizer."
			}
		],
		"Advanced Tactics": [
			{
				"useType": "E",
				"effect": "When a Narrator announces an Encounter modifier other than Water, you may call \u201cTactics, Cancel\u201d to negate it. If the Encounter modifier is Stealth, instead, you gain 3 uses of the following power: \u201cP&C - target ally may go OOG for 10 seconds to move from one patch of shadow to another\u201d."
			}
		],
		"Advanced Tactics Upgrade": [
			{
				"useType": "S",
				"effect": "While in a line with you, your allies are Immune to non-Bypass Dominate, Fear, Sleep, or Taunt effects. This is removed from any target that leaves the line."
			}
		]
	},
	"Control":{
		"Wave of Emotion": [
			{
				"useType": "R",
				"effect": "Call Burst Taunt 2 attacks. You may choose to deliver this effect as a Point and Click by removing the word Burst.",
				"time": "Wait 20"
			}
		],
		"Wave of Emotion Upgrade": [
			{
				"useType": "D",
				"effect": "Call Burst Stun 10 seconds."
			},
			{
				"useType": "D",
				"effect": "Call Burst Stun 10 seconds."
			}
		],
		"Blast Wave": [
			{
				"useType": "D",
				"effect": "Call Burst Knockback or Burst Pull."
			},
			{
				"useType": "D",
				"effect": "Call Burst Knockback or Burst Pull."
			}
		],
		"Blast Wave Upgrade": [
			{
				"useType": "D",
				"effect": "Call Burst Slow 30 seconds."
			}
		],
		"Aura of Power (Final)": [
			{
				"useType": "E",
				"effect": "Call Burst Fear 45 seconds or Burst Frozen Foot 45 seconds."
			}
		],
		"Aura of Power (Final) Upgrade": [
			{
				"useType": "E",
				"effect": "Call Burst 15 Spirit."
			}
		]
	},
	"Destruction":{
		"Force Bolt": [
			{
				"useType": "R",
				"effect": "Call 5 (type) or 3 Bypass (double your Cast time for Bypass).",
				"time": "Cast 5",
				"deliveryType": "Packet"
			},
			{
				"useType": "S",
				"effect": "Gain Normal type. Your Spell Pool for Force Bolt is 3."
			}
		],
		"Force Bolt Upgrade": [
			{
				"useType": "D",
				"effect": "The cast time on your first two Force Bolts is reduced to 0.  Additionally, these Force Bolts are Blasts instead of Packets."
			},
			{
				"useType": "D",
				"effect": "Gain 2 uses of Knockback.",
				"deliveryType": "MP&C"
			}
		],
		"Unerring": [
			{
				"useType": "D",
				"effect": "Call 9 (type).",
				"deliveryType": "Point and Click"
			},
			{
				"useType": "S",
				"effect": "Increase your Spell Pool for Force Bolt by 1 and gain Air type and Water type."
			}
		],
		"Unerring Upgrade": [
			{
				"useType": "S",
				"effect": "Increase your Spell Pool for Force Bolt by 1 and gain Earth type and Fire type."
			},
			{
				"useType": "D",
				"effect": "Gain an additional use of the first sub-power in Unerring."
			}
		],
		"Meteor Swarm (Final)": [
			{
				"useType": "E",
				"effect": "Call \u201cMeteor Swarm, Hold!\u201d Throw up to 4 Packets simultaneously and Call Blast 25 Bypass.",
				"deliveryType": "Packet"
			}
		],
		"Meteor Swarm (Final) Upgrade": [
			{
				"useType": "E",
				"effect": "Call \u201cMeteor Swarm, Hold!\u201d Throw up to 4 Packets simultaneously and Call Blast 25 Bypass.",
				"deliveryType": "Packet"
			}
		]
	},
	"Divine Protection":{
		"Oath of Protection": [
			{
				"useType": "R",
				"effect": "Substitute Taunt 2 attacks.",
				"time": "Wait 10",
				"deliveryType": "Swing"
			},
			{
				"useType": "T",
				"effect": "Chosen other ally receives a Mark of Protection and gains +10 Temporary HP each Encounter."
			}
		],
		"Oath of Protection Upgrade": [
			{
				"useType": "D",
				"effect": "Gain 1 use of Heal 20, Point and Click. This power must target the ally under your Mark of Protection."
			},
			{
				"useType": "D",
				"effect": "As a Point and Click, Call 10 Spirit, then Taunt 3 attacks against a target currently attacking the ally under your Mark of Protection."
			}
		],
		"Armor of Faith": [
			{
				"useType": "D",
				"effect": "Gain 1 Armor Resist."
			},
			{
				"useType": "D",
				"effect": "Gain 10 Temporary HP."
			},
			{
				"useType": "S",
				"effect": "You may use kite shields or any shield of a similar size. If you use a shield in an Encounter, instead of all of your damage being reduced to 4 with weapons, all of your damage with weapons is reduced to 3 for that Encounter."
			}
		],
		"Armor of Faith Upgrade": [
			{
				"useType": "D",
				"effect": "You place a Universal Resist on your shield, which negates the first non-Bypass attack that hits the shield that would otherwise ignore the shield."
			}
		],
		"Grace of the Gods": [
			{
				"useType": "S",
				"effect": "Gain the appropriate Invocation power in the Holy Light tree.",
				"options":["Invocation"]
			}
		],
		"Grace of the Gods Upgrade": [
			{
				"useType": "E",
				"effect": "The first time this Day you would be reduced to 0 HP or fewer, Heal to your Max HP"
			}
		]
	},
	"Elementalism":{
		"Elemental Connection": [
			{
				"useType": "T",
				"effect": "Select one of: Air, Earth, Fire, Water. Add 1 Convert (selected element) with weapons and Packets"
			}
		],
		"Elemental Connection Upgrade": [
			{
				"useType": "R",
				"effect": "While using Elemental Connection, Minimize and Add 1 (selected element)."
			}
		],
		"Elemental Focus": [
			{
				"useType": "T",
				"effect": "Select one of: Air, Earth, Fire, Water. \u2022 Air: Gain 2 Dodges each Encounter. \u2022 Earth: Gain Immune to Status Effects, except for Clumsy and Slow. \u2022 Fire: Add 1 to Fire Damage. \u2022 Water: Gain 4 uses of Touch Heal 5 each Encounter."
			}
		],
		"Elemental Focus Upgrade": [
			{
				"useType": "S",
				"effect": "Gain the Benefits and Drawbacks of the Healer Role. Your Cast Time with Force Bolt doubles. (At the start of a Thread, you may choose not to use this entire Upgrade)"
			},
			{
				"useType": "R",
				"effect": "Heal 10.",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "R",
				"effect": "When selecting Water for Elemental Focus or Channel Element, your Heals in this power tree Add 10."
			}
		],
		"Channel Element": [
			{
				"useType": "E",
				"effect": "Select one of: Air, Earth, Fire, Water. \u2022 Air: The Cast Time for your Force Bolts becomes 1 second for the next minute. \u2022 Earth: Gain 40 Temporary HP. \u2022 Fire: Gain 4 uses of Point and Click 10 Fire. \u2022 Water: Gain 6 uses of Touch Heal 10."
			}
		],
		"Channel Element Upgrade": [
			{
				"useType": "E",
				"effect": "Select one of: Air, Earth, Fire, Water. \u2022 Air: The Cast Time for your Force Bolts becomes 1 second for the next minute. \u2022 Earth: Gain 40 Temporary HP. \u2022 Fire: Gain 4 uses of Point and Click 10 Fire. \u2022 Water: Gain 6 uses of Touch Heal 10."
			}
		]
	},
	"Enervation": {
		"Taunting Strike": [
			{
				"useType": "R",
				"effect": "Substitute Taunt 2 attacks.",
				"time": "Wait 10",
				"deliveryType": "Swing"
			},
			{
				"useType": "D",
				"effect": "Substitute Weakness 20 seconds.",
				"deliveryType": "Swing"
			}
		],
		"Taunting Strike Upgrade": [
			{
				"useType": "D",
				"effect": "Change the Delivery of Taunting Strike to Burst three times."
			}
		],
		"Nerve Strike": [
			{
				"useType": "D",
				"effect": "Substitute Frozen Foot 45 seconds Bypass. You may not use this power against Multi-monsters."
			}
		],
		"Nerve Strike Upgrade": [
			{
				"useType": "D",
				"effect": "Heal 5 and call Stun 15 as a MP&C."
			}
		],
		"Sudden Strike (Final)": [
			{
				"useType": "E",
				"effect": "Substitute Disarm 1 minute or Sleep Encounter.",
				"deliveryType": "Swing"
			}
		],
		"Sudden Strike (Final) Upgrade": [
			{
				"useType": "E",
				"effect": "When you would drop to 0 HP or below, call \u201cRecovery!\u201d to Heal to \u00bd Max HP."
			}
		]
	},
	"Evocation":{
		"Torment Pulse": [
			{
				"useType": "D",
				"effect": "When an opponent within 30 feet is reduced to 0 or fewer HP, Add 2 Force Bolt."
			}
		],
		"Torment Pulse Upgrade": [
			{
				"useType": "R",
				"effect": "When an opponent within 30 feet is reduced to 0 or fewer HP, Heal 5."
			}
		],
		"Torment Lash": [
			{
				"useType": "D",
				"effect": "Call Fear 30 seconds against 2 different targets as a Melee Point and Click, or Call 5 Bypass against 4 different targets as a Point and Click."
			}
		],
		"Torment Lash Upgrade": [
			{
				"useType": "D",
				"effect": "Call Heal 15. This healing is often uncomfortable to recipients.",
				"deliveryType": "Touch"
			},
			{
				"useType": "D",
				"effect": "Call Heal 15. This healing is often uncomfortable to recipients.",
				"deliveryType": "Touch"
			}
		],
		"Torment Infusion": [
			{
				"useType": "E",
				"effect": "Call \u201cTorment Infusion!\u201d The Cast Time for your Force Bolts becomes 1 second this Encounter."
			},
			{
				"useType": "E",
				"effect": "Gain two additional uses of Unerring from Destruction this Encounter."
			}
		],
		"Torment Infusion Upgrade": [
			{
				"useType": "E",
				"effect": "Call \u201cTorment Sustains Us!\u201d. Take 10 Bypass. All Allies Heal 10."
			},
			{
				"useType": "E",
				"effect": "Call \u201cTorment Sustains Us!\u201d. Take 10 Bypass. All Allies Heal 10."
			}
		]
	},
	"Fateweaving":{
		"Tangle Fate": [
			{
				"useType": "R",
				"effect": "Call 5 Spirit.",
				"time": "Cast 5",
				"deliveryType": "Packet"
			},
			{
				"useType": "R",
				"effect": "When you hit with a packet from this power, you may immediately call Frozen Foot 10 seconds against the same target.",
				"time": "Wait 20",
				"deliveryType": "P&C"
			}
		],
		"Tangle Fate Upgrade": [
			{
				"useType": "S",
				"effect": "You are skilled at manipulating the web of Fate, and have found ways to entangle yourself with important groups of people. When you buy the Rank or Social Butterfly powers, you also receive Rank 1 with a different Organization. If you are already at your Max Rank, you may instead receive one Rumors power."
			}
		],
		"Tug Fates Strings": [
			{
				"useType": "T",
				"effect": "Choose one, based on the Role of your target (may not be you): \u2022 A Healer Minimizes (element) or Adds 2 to their Healing powers \u2022 A Guardian gains 2 Armor Resists each Encounter \u2022 An Aggressor or Savant receives 2 Dodges each Encounter",
				"deliveryType": "Touch"
			}
		],
		"Tug Fates Strings Upgrade": [
			{
				"useType": "E",
				"effect": "You are proficient with scrying the Web of Fate, either through runes, cards, or some other method. You may write down on a question on a note and hand it to an Organizer. They will give you a vague vision to answer that question."
			}
		],
		"Warnings in the Web": [
			{
				"useType": "E",
				"effect": "(If you use this power out of combat, your Narrator will provide you with suggestions based on their understanding of the next Encounter.) Select a Status Effect. Up to 5 allies become Immune to it this Encounter."
			},
			{
				"useType": "R",
				"effect": "When using Tug Fate\u2019s Strings, the target also gains 2 Resists against Status Effects in the next Encounter."
			}
		],
		"Warnings in the Web Upgrade": [
			{
				"useType": "R",
				"effect": "When you call in a Favor, your Favor operates as if you were one Rank higher."
			},
			{
				"useType": "D",
				"effect": "Gain 1 Phase."
			}
		]
	},
	"Field Medicine":{
		"Bandaging": [
			{
				"useType": "R",
				"effect": "Heal 10.",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "R",
				"effect": "Stabilize.",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "R",
				"effect": "Target Heals to their Max HP. This power may not be used during combat. RP",
				"deliveryType": "Touch"
			}
		],
		"Bandaging Upgrade": [
			{
				"useType": "S",
				"effect": "Gain the Benefits and Drawbacks of the Guardian Role. This increases your max HP cap, but does not remove other Healer Drawbacks. Increase your Wait Time with Bandaging by 15. (At the start of an Encounter, you may choose not to use this specific sub-power)"
			},
			{
				"useType": "S",
				"effect": "Gain +8 Max HP."
			},
			{
				"useType": "D",
				"effect": "Gain 1 Feat of Strength."
			}
		],
		"Stimulant": [
			{
				"useType": "D",
				"effect": "Cleanse target other ally. (The Wait Time applies if you have used the other sub-power.)",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "D",
				"effect": "Cleanse target other ally. (The Wait Time applies if you have used the other sub-power.)",
				"time": "Wait 30",
				"deliveryType": "Touch"
			}
		],
		"Stimulant Upgrade": [
			{
				"useType": "R",
				"effect": "When using Stimulant, your target is Immune to the Cleansed Status Effect this Encounter. (It\u2019s best to explain this power to Allies before combat)"
			}
		],
		"Emergency Treatment": [
			{
				"useType": "E",
				"effect": "Target Heals to Full. You may not target yourself.",
				"deliveryType": "Touch"
			},
			{
				"useType": "E",
				"effect": "Target Heals to Full. You may not target yourself.",
				"deliveryType": "Touch"
			}
		],
		"Emergency Treatment Upgrade": [
			{
				"useType": "E",
				"effect": "A dead target is revived at 1 HP. This power is not usable if the target has been dead more than 12 hours. This power may not be Refreshed.",
				"deliveryType": "Touch"
			}
		]
	},
	"Healing":{
		"Soothing Touch": [
			{
				"useType": "R",
				"effect": "Heal 10.",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "R",
				"effect": "Stabilize.",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "R",
				"effect": "Target Heals to their Max HP. This power may not be used during combat.",
				"time": "RP",
				"deliveryType": "Touch"
			}
		],
		"Soothing Touch Upgrade": [
			{
				"useType": "S",
				"effect": "Add 5 to your Heals with Soothing Touch. Double the effect of any items that Add to your Heals from this power tree."
			}
		],
		"Healing Surge": [
			{
				"useType": "D",
				"effect": "Call Allies Burst Heal 10. (This also heals you)"
			},
			{
				"useType": "D",
				"effect": "Call Allies Burst Heal 10. (This also heals you)"
			}
		],
		"Healing Surge Upgrade": [
			{
				"useType": "S",
				"effect": "Double all Heals from Healing Surge."
			}
		],
		"Word of Healing": [
			{
				"useType": "E",
				"effect": "Call All Allies Heal 20."
			}
		],
		"Word of Healing Upgrade": [
			{
				"useType": "R",
				"effect": "When using Word of Healing, instead of 20, your allies Heal to Full."
			}
		]
	},
	"Hexing": {
		"Affliction": [
			{
				"useType": "D",
				"effect": "Call Fear 30 seconds. Packet or",
				"deliveryType": "MP&C"
			},
			{
				"useType": "D",
				"effect": "Call Frozen Foot 30 seconds. Packet or",
				"deliveryType": "MP&C"
			}
		],
		"Affliction Upgrade": [
			{
				"useType": "D",
				"effect": "Gain an additional use of each sub-power in Affliction."
			}
		],
		"Pelting Stones": [
			{
				"useType": "D",
				"effect": "Gain 2 uses of Knockback.",
				"deliveryType": "Melee Point and Click"
			},
			{
				"useType": "D",
				"effect": "Call Stun 10 seconds against 2 targets.",
				"deliveryType": "Point and Click"
			}
		],
		"Pelting Stones Upgrade": [
			{
				"useType": "D",
				"effect": "Gain an additional use of each sub-power in Pelting Stones."
			}
		],
		"Root": [
			{
				"useType": "E",
				"effect": "Call All Enemies Frozen Foot 30 seconds."
			}
		],
		"Root Upgrade": [
			{
				"useType": "R",
				"effect": "When using Root, double the duration of the Frozen Foot."
			}
		]
	},
	"Holy Light":{
		"Searing Light": [
			{
				"useType": "R",
				"effect": "Call 6 Spirit.",
				"time": "Cast 5",
				"deliveryType": "Packet"
			}
		],
		"Searing Light Upgrade": [
			{
				"useType": "D",
				"effect": "Call Cleanse. Melee Point & Click"
			},
			{
				"useType": "E!",
				"effect": "Perform a small ceremony honoring your deity with up to 3 target other allies. Each of them gains 6 Focus for this Event, which may not take them over cap."
			}
		],
		"Turn": [
			{
				"useType": "D",
				"effect": "Select up to three targets and call 5 Spirit.",
				"deliveryType": "Point and Click"
			},
			{
				"useType": "D",
				"effect": "Gain 3 uses of Knockback. Melee Point & Click"
			}
		],
		"Turn Upgrade": [
			{
				"useType": "R",
				"effect": "When you use Invocation, double the effects or gain a second use of the power (not both). These always double: The Brothers, Nivone, Gorgath, Noctus, Sulith. These always get a second use: Gloriel, Auran, Kora, Lyla, Suhl\u2019Sekh, The Twins. These can do either: Avahlei, Laurela, Maenir, Thul."
			}
		],
		"Invoke Deity (Final)": [
			{
				"useType": "E",
				"effect": "Call 30 Bypass. Melee Point & Click"
			}
		],
		"Invoke Deity (Final) Upgrade": [
			{
				"useType": "E",
				"effect": "A dead target is revived at 1 HP. This power is not usable if the target has been dead more than 12 hours. This power may not be Refreshed.",
				"deliveryType": "Touch"
			}
		]
	},
	"Invocation":{
		"Invocation: The Brothers": [
			{
				"useType": "D",
				"effect": "Call \u201cThe Brothers grant me strength!\u201d to gain 2 Feats of Strength."
			}
		],
		"Invocation: Gloriel": [
			{
				"useType": "D",
				"effect": "You may call \u201cResist, Gloriel frees me!\u201d against a Status Effect."
			}
		],
		"Invocation: Nivone": [
			{
				"useType": "R",
				"effect": "When you Heal a player at 0 or fewer HP, you may call \u201cNivone\u2019s family unbroken!\u201d to grant them 1 Armor Resist."
			}
		],
		"Invocation: Auran(Final)": [
			{
				"useType": "E",
				"effect": "Choose Burst, and Call \u201c20 Bypass. Auran purges corruption!\u201d."
			}
		],
		"Invocation: Avahlei": [
			{
				"useType": "D",
				"effect": "Touch, Call \u201cHeal 10. Avahlei mends you!\u201d."
			}
		],
		"Invocation: Kora": [
			{
				"useType": "E!",
				"effect": "Call \u201cKora\u2019s inspiration!\u201d to produce an item card for Lentil Soup."
			}
		],
		"Invocation: Laurela": [
			{
				"useType": "D",
				"effect": "Call \u201cLaurela\u2019s shadow shelters me!\u201d to go Out of Game for 20 seconds."
			}
		],
		"Invocation: Lyla": [
			{
				"useType": "E",
				"effect": "Call \u201cLyla\u2019s luck bless me!\u201d to play the Foreign Coins game. Additionally, when you play this game you may choose \u201ceven\u201d or \u201codd\u201d instead of a specific number and matches are worth 15 lunari."
			}
		],
		"Invocation: Noctus": [
			{
				"useType": "E!",
				"effect": "Touch an Ally other than yourself and call \u201cBlood of Noctus!\u201d. If they are not a Dragonkin, they gain all Dragonkin lineage powers for this Event. If they are a Dragonkin, they Add 1 with their claws and Add 5 with their breath for this Event."
			}
		],
		"Invocation: Maenir": [
			{
				"useType": "T",
				"effect": "Touch an Ally other than yourself and call \u201cMaenir\u2019s might upon you!\u201d to grant them Add 1 All this Thread."
			}
		],
		"Invocation: Suhl'Sekh": [
			{
				"useType": "E!",
				"effect": "Call \u201cSuhl\u2019Sekh give me knowledge\u201d to gain a single non-restricted Knowledge or common Language power for this Event."
			}
		],
		"Invocation: Thul": [
			{
				"useType": "T",
				"effect": "Touch an Ally other than yourself and call \u201cThul\u2019s law protects you!\u201d to grant them +5 Max HP for this Thread. If they are also wearing armor, they gain an additional +3 Max HP."
			}
		],
		"Invocation: Gorgath": [
			{
				"useType": "R",
				"effect": "When you reduce an enemy to 0 or fewer HP, you may call \u201cGorgath devours you!\u201d to Heal 10, Self."
			}
		],
		"Invocation: Sulith": [
			{
				"useType": "R",
				"effect": "When you or an Ally under your direct control reduce an enemy to 0 or fewer HP, you may call \u201cSulith\u2019s power is supreme!\u201d to recharge a single piece of a Difficult power."
			}
		],
		"Invocation: The Twins(Final)": [
			{
				"useType": "E",
				"effect": "You may call \u201cThe Twins entice you!\u201d to call Dominate 30 seconds as a Point and Click."
			}
		]
	},
	"Phasing": {
		"Ethereal Mastery": [
			{
				"useType": "R",
				"effect": "Call 5 Spirit.",
				"time": "Cast 5",
				"deliveryType": "Packet"
			},
			{
				"useType": "R",
				"effect": "Out of Game to move in a straight line for up to 15 seconds.",
				"time": "Wait 30",
				"deliveryType": "Self"
			}
		],
		"Ethereal Mastery Upgrade": [
			{
				"useType": "R",
				"effect": "While using Ethereal Mastery, instead of going Out of Game for 15 seconds, you may Call Out of Game 10 seconds as a Melee Point and Click."
			},
			{
				"useType": "R",
				"effect": "Gain a bonus participant when you participate in a Ritual."
			}
		],
		"Wormhole": [
			{
				"useType": "D",
				"effect": "Gain 2 Phases."
			},
			{
				"useType": "D",
				"effect": "You create two magical portals (their phys-reps should be buckler size) within line of sight of each other. Anyone stepping on a portal must slowly walk, Out of Game, to the other disk, where they reappear. Portals must be placed with player safety in mind, and should not be thrown into moving combat."
			}
		],
		"Wormhole Upgrade": [
			{
				"useType": "R",
				"effect": "When using a Phase granted by Wormhole, you may go Out of Game for up to 20 seconds."
			},
			{
				"useType": "E",
				"effect": "You may participate in (but not lead) a Ritual not of your Path. This does not stack with the Upgrade to Ethereal Mastery."
			}
		],
		"Mass Confusion": [
			{
				"useType": "E",
				"effect": "Call a Hold. Swap the places of any players present in any manner you choose. When play resumes, Call All Enemies Weakness 15 seconds. This may not be used to move enemies into the area of another power.",
				"deliveryType": "P&C"
			}
		],
		"Mass Confusion Upgrade": [
			{
				"useType": "E",
				"effect": "Call \u201cAll Allies Add 2\u201d."
			}
		]
	},
	"Resilience": {
		"Combat Mastery": [
			{
				"useType": "S",
				"effect": "Gain the Combat Training power in Universal, except that you gain ALL benefits.",
				"options": ["Universal:Combat Training"],
			}
		],
		"Combat Mastery Upgrade": [
			{
				"useType": "S",
				"effect": "Gain +5 Max HP if you are a Guardian."
			},
			{
				"useType": "S",
				"effect": "You treat normal weapons as if they were of Quality."
			}
		],
		"Great Strength": [
			{
				"useType": "D",
				"effect": "Gain 2 Feats of Strength."
			},
			{
				"useType": "S",
				"effect": "Gain an additional +5 Max HP while wearing any Tier of Armor."
			}
		],
		"Great Strength Upgrade": [
			{
				"useType": "D",
				"effect": "Resist a Status Effect."
			}
		],
		"Resurgence": [
			{
				"useType": "E",
				"effect": "When you would drop to 0 HP or below, call \u201cResurgence!\u201d to Heal to \u00bd Max HP."
			}
		],
		"Resurgence Upgrade": [
			{
				"useType": "R",
				"effect": "When using Resurgence, gain Immune to Frozen Foot, Slow, Stun, and Weakness. Add 1 All for this Encounter if you are an Aggressor. Otherwise, gain 1 Armor Resist."
			}
		]
	},
	"Righteousness": {
		"Spell Blade": [
			{
				"useType": "S",
				"effect": "You may store your Spell Pool in a held weapon and expend a Force Bolt from your Spell Pool to Substitute it for a Swing of any held weapon. The Force Bolt can be modified as normal (by items that increase Force Bolt\u2019s damage or the Aggressor power), but you do not apply modifiers to Melee attacks such as Precision (Warcraft) or having a weapon of Quality."
			}
		],
		"Spell Blade Upgrade": [
			{
				"useType": "S",
				"effect": "When you have a Force Bolt stored in your Spell Pool, you may expend it to Add the Force Bolt\u2019s normal damage and Convert its type for one swing of your weapon. Add the Aggressor benefit only once to the total call, not once to the Force Bolt and once to the weapon\u2019s damage. Do not apply any powers or items that raise the damage of your Force Bolt."
			}
		],
		"Holy Light": [
			{
				"useType": "D",
				"effect": "Select up to 2 targets and call 4 Spirit.",
				"deliveryType": "MP&C"
			}
		],
		"Holy Light Upgrade": [
			{
				"useType": "R",
				"effect": "While using Holy Light, call 9 Spirit instead of 4 Spirit."
			},
			{
				"useType": "D",
				"effect": "Resist a Status Effect."
			}
		],
		"Blade of the Righteous (Final)": [
			{
				"useType": "E",
				"effect": "Call \"Righteousness!\". Your melee weapon attacks Substitute 5 Bypass. If you are reduced to 0 HP, this power ends."
			}
		],
		"Blade of the Righteous (Final) Upgrade": [
			{
				"useType": "S",
				"effect": "Gain the appropriate Invocation power in the Holy Light tree.",
				"options": ["Invocation"],
			}
		]
	},
	"Thiefy":{
		"Thiefy":[
			{
				"options": ["Universal:Lockpicking", "Universal:Trap Finding"],
			}
		]
	},
	"Animal":{
		"Scent":[
			{
				"useType": "S",
				"effect": "You may request scent-based information from Narrators.",
			}
		],
		"Swimming":[
			{
				"useType": "S",
				"effect": "You are Immune to the Water Encounter Modifier.",
			}
		]
	},
	
	"Sanctity": {
		"Invocation of Sanctuary": [
			{
				"useType": "S",
				"effect": "Call Sanctuary against any non-Bypass damaging effect or Status Effect, negating it. Deliberately causing harm or a Status Effect to any creature or actively interposing yourself between allies and the attacks of an enemy immediately removes this effect for the Encounter. Using Knockback or Pull effects does not inherently remove this effect, unless the target is harmed or receives a Status Effect as a result of your actions."
			}
		],
		"Invocation of Sanctuary Upgrade": [
			{
				"useType": "S",
				"effect": "Gain +5 Max HP."
			},
			{
				"useType": "S",
				"effect": "Your Wait powers in Teamwork and Shielding are reduced by 5 seconds."
			}
		],
		"Sacred Duty": [
			{
				"useType": "D",
				"effect": "Stabilize.",
				"deliveryType": "P&C"
			}
		],
		"Sacred Duty Upgrade": [
			{
				"useType": "R",
				"effect": "When you use Sacred Duty on an ally, they Heal 10."
			}
		],
		"Strength of Faith": [
			{
				"useType": "S",
				"effect": "Gain the appropriate Invocation power in the Holy Light tree.",
				"options": ["Invocation"],
			}
		],
		"Strength of Faith Upgrade": [
			{
				"useType": "E",
				"effect": "By performing a small ceremony, you grant a blessing to a single target. They gain +10 Max HP for this day."
			}
		]
	},
	"Shapeshifting": {
		"Body of the Beast": [
			{
				"useType": "S",
				"effect": "Gain an Armor Resist each Encounter."
			},
			{
				"useType": "D",
				"effect": "Gain 2 uses of a Knockback or Pull.",
				"deliveryType": "MP&C"
			}
		],
		"Body of the Beast Upgrade": [
			{
				"useType": "D",
				"effect": "Resist a Status Effect."
			}
		],
		"Hunters Aura": [
			{
				"useType": "D",
				"effect": "Gain three uses of Taunt 3 attacks.",
				"deliveryType": "P&C"
			},
			{
				"useType": "S",
				"effect": "You may use one or two 30\u201d claw boffers that inflict 3 Normal."
			}
		],
		"Hunters Aura Upgrade": [
			{
				"useType": "D",
				"effect": "Gain 10 Temporary HP."
			}
		],
		"Apex Predator": [
			{
				"useType": "E",
				"effect": "Call \u201cApex Predator!\u201d Heal to your Max HP. Gain 5 uses of a Point and Click Taunt 5 attacks. You may not target the same person more than once with these."
			}
		],
		"Apex Predator Upgrade (Final)": [
			{
				"useType": "E",
				"effect": "Call \u201cBody Spikes!\u201d Any time you are struck by a melee attack, you may call 5 Bypass as a Melee Point and Click attack against your attacker."
			}
		]
	},
	"Shielding": {
		"Barrier": [
			{
				"useType": "R",
				"effect": "Target other ally receives 1 Armor Resist.",
				"time": "Wait 15",
				"deliveryType": "Touch"
			}
		],
		"Barrier Upgrade": [
			{
				"useType": "T",
				"effect": "Each Encounter, target other ally gains a Dodge.",
				"deliveryType": "Touch"
			},
			{
				"useType": "T",
				"effect": "Each Encounter, target other ally gains a Dodge.",
				"deliveryType": "Touch"
			}
		],
		"Cleanse": [
			{
				"useType": "D",
				"effect": "Call Cleanse.",
				"deliveryType": "MP&C"
			}
		],
		"Cleanse Upgrade": [
			{
				"useType": "R",
				"effect": "When you use Cleanse, you may call Heal 15 against the same target."
			}
		],
		"Mirror": [
			{
				"useType": "E",
				"effect": "Gain 2 Reflects or grant an ally 2 Reflects.",
				"deliveryType": "Touch"
			},
			{
				"useType": "E",
				"effect": "Gain 2 Reflects or grant an ally 2 Reflects.",
				"deliveryType": "Touch"
			}
		],
		"Mirror Upgrade": [
			{
				"useType": "R",
				"effect": "When you use Mirror, gain both effects."
			}
		]
	},
	"Soultending":{
		"Vital Humors": [
			{
				"useType": "R",
				"effect": "Call 5 Acid.",
				"time": "Cast 5",
				"deliveryType": "Packet"
			},
			{
				"useType": "R",
				"effect": "Heal 10.",
				"time": "Wait 30",
				"deliveryType": "Touch"
			},
			{
				"useType": "R",
				"effect": "Target Heals to their Max HP. This power may not be used during combat.",
				"time": "RP",
				"deliveryType": "Touch"
			}
		],
		"Vital Humors Upgrade": [
			{
				"useType": "S",
				"effect": "Add 2 to your damage with Vital Humors."
			},
			{
				"useType": "S",
				"effect": "Add 5 to healing with Vital Humors."
			}
		],
		"Infuse Life": [
			{
				"useType": "D",
				"effect": "You use soul energy to temporarily banish your target. Call Out of Game 20 seconds.",
				"deliveryType": "MP&C"
			},
			{
				"useType": "D",
				"effect": "Using its body as a conduit, you speak with a spirit and ask it 1 question. Willing spirits will answer freely, but unwilling spirits will only answer \u201cYes / No / Maybe\u201d. This power does not function on the merely unconscious.",
				"time": "RP",
				"deliveryType": "Touch"
			}
		],
		"Infuse Life Upgrade": [
			{
				"useType": "D",
				"effect": "You use soul energy to temporarily banish your target. Call Out of Game 20 seconds.",
				"deliveryType": "MP&C"
			},
			{
				"useType": "R",
				"effect": "While using Infuse Life on a departed spirit, you may ask 2 additional questions."
			}
		],
		"Dark Night of the Soul (Final)": [
			{
				"useType": "E",
				"effect": "Call Burst Fear 45 seconds. You may call this effect as two Point and Clicks instead of a Burst."
			}
		],
		"Dark Night of the Soul (Final) Upgrade": [
			{
				"useType": "E",
				"effect": "Call Burst Out of Game 30 seconds. You may call this effect as two Point and Clicks instead of a Burst."
			}
		]
	},
	"Spirit Lore": {
		"Spirit Strike": [
			{
				"useType": "R",
				"effect": "Call 6 Spirit.",
				"time": "Cast 5",
				"deliveryType": "Packet"
			}
		],
		"Spirit Strike Upgrade": [
			{
				"useType": "S",
				"effect": "You gain a Spell Pool of 3 (see Destruction) for Spirit Strike only."
			}
		],
		"Spirits Blessing": [
			{
				"useType": "T",
				"effect": "Target gains 1 Dodge and 1 use of \u201cOut of Game, 10 seconds\u201d each Encounter.",
				"deliveryType": "Touch"
			}
		],
		"Spirits Blessing Upgrade": [
			{
				"useType": "T",
				"effect": "Target gains 1 Phase each Encounter.",
				"deliveryType": "Touch"
			}
		],
		"Spirit Dispatch": [
			{
				"useType": "R",
				"effect": "You may expend a use of Spirit Strike in your Spell Pool to Add 5 to any Healing call."
			}
		],
		"Spirit Dispatch Upgrade": [
			{
				"useType": "E",
				"effect": "A target other than you Heals to Full.",
				"deliveryType": "Touch"
			}
		]
	},
	"Teamwork": {
		"Empower": [
			{
				"useType": "R",
				"effect": "Target other ally gains 5 Temporary HP.",
				"time": "Wait 10",
				"deliveryType": "Touch"
			}
		],
		"Empower Upgrade": [
			{
				"useType": "T",
				"effect": "Your allies gain an Armor Resist each Encounter. If there are multiple instances of this power you may convert the Armor Resist into a Dodge (with 2 instances) or a Phase (with 3 instances). Before handing out this bonus, please check with other players to see which level of the bonus applies. Remember that you cannot stack the same power twice!"
			}
		],
		"I Recommend": [
			{
				"useType": "D",
				"effect": "Choose one of: Air, Earth, Fire, or Water. Target other ally Adds 1 when using that element. Alternately, a target may increase healing from any single power by 2. You may place this effect on two targets."
			}
		],
		"I Recommend Upgrade": [
			{
				"useType": "R",
				"effect": "When using I Recommend\u2026, each target also receives 10 Temporary HP."
			}
		],
		"Push Your Limits": [
			{
				"useType": "E",
				"effect": "Target other ally Refreshes a single part of a Difficult or Exhausting power.",
				"deliveryType": "Touch"
			}
		],
		"Push Your Limits Upgrade": [
			{
				"useType": "E",
				"effect": "Call All Allies Heal 20."
			}
		]
	},
	"Terrain Mastery": {
		"Salamanders Fire": [
			{
				"useType": "R",
				"effect": "Call Blast 5 Fire.",
				"time": "Cast 10",
				"deliveryType": "Packet"
			},
			{
				"useType": "R",
				"effect": "Call 5 Fire against 3 different targets.",
				"time": "Wait 30",
				"deliveryType": "P&C"
			}
		],
		"Salamanders Fire Upgrade (Final)": [
			{
				"useType": "E",
				"effect": "Drop, toss, or roll a specially-marked object (must be throwing safe). During this Encounter, if you are within 30 feet of your object, you may call a Hold to have enemies within Blast range of your object take 25 Bypass. This power may not be combined with Mass Confusion from Phasing."
			}
		],
		"Talented Scout": [
			{
				"useType": "S",
				"effect": "You gain the Tracker power in the Universal tree.",
				"options": ["Universal:Tracker"]
			},
			{
				"useType": "S",
				"effect": "You learn the Scout\u2019s Eyes ritual from Scriptures of Steel."
			},
			{
				"useType": "S",
				"effect": "You may participate in Rituals as if you were on Path of Steel."
			},
		],
		"Talented Scout Upgrade": [
			{
				"useType": "S",
				"effect": "You gain the Upgrade to the Tracker power in the Universal tree."
			},
			{
				"useType": "E",
				"effect": "Go Out of Game for up to three minutes.",
				"deliveryType": "Self"
			}
		],
		"Balanced Training": [
			{
				"useType": "S",
				"effect": "Receive any single base power in the Archery or Weapon Mastery power trees. (That power should be placed here on your character sheet)",
				"options": ["Archery:Accuracy", "Archery:Hail of Arrows", "Archery:Killing Shot(Final)", "Weapon Mastery:Expertise", "Weapon Mastery:Technique", "Weapon Mastery:Mastery"],
			}
		],
		"Balanced Training Upgrade": [
			{
				"useType": "S",
				"effect": "Receive the Upgrade to the power above. (That Upgrade should be placed here on your character sheet)",
				"options": ["Archery:Accuracy Upgrade", "Archery:Hail of Arrows Upgrade", "Archery:Killing Shot(Final) Upgrade", "Weapon Mastery:Expertise Upgrade", "Weapon Mastery:Technique Upgrade", "Weapon Mastery:Mastery Upgrade"],
			}
		]
	},
	"Thievery": {
		"Deft Fingers": [
			{
				"useType": "R",
				"effect": "Allows you to discover and render harmless any mundane traps on a single object or in a 1-foot radius.",
				"time": "RP"
			},
			{
				"useType": "D",
				"effect": "You may negate the effects of a single non-magical trap on yourself only."
			},
			{
				"useType": "S",
				"effect": "You receive the Lockpicking power in Universal and its Upgrade for free.",
				"options": ["Universal:Lockpicking"],
			}
		],
		"Deft Fingers Upgrade": [
			{
				"useType": "D",
				"effect": "You may pocket one small object as a",
				"deliveryType": "Melee Point and Click"
			},
			{
				"useType": "E!",
				"effect": "You \u201cfind\u201d some things that other people \u201clost\u201d. Find a Quartermaster and roll a six-sided die. You receive (result \u2013 1) x 10 lunari."
			}
		],
		"Fast Talk, Fast Hands": [
			{
				"useType": "D",
				"effect": "Make a distracting statement of at least 5 words and call Stun 20 seconds.",
				"deliveryType": "MP&C"
			},
			{
				"useType": "D",
				"effect": "Call Disarm 5 seconds.",
				"deliveryType": "MP&C"
			}
		],
		"Fast Talk, Fast Hands Upgrade": [
			{
				"useType": "S",
				"effect": "You receive a slight boost of luck in some games of chance (requires a Narrator). Once per",
				"time": "RP"
			},
			{
				"useType": "E",
				"effect": "You may sell an item to a Quartermaster for 3 times the normal Buy value or an extra 30 lunari, whichever is less."
			}
		],
		"Flourish": [
			{
				"useType": "E",
				"effect": "Substitute Disarm 30 seconds.",
				"deliveryType": "Swing"
			},
			{
				"useType": "E",
				"effect": "Substitute Disarm 30 seconds.",
				"deliveryType": "Swing"
			}
		],
		"Flourish Upgrade": [
			{
				"useType": "S",
				"effect": "Add 2 to all Thrown Weapons or Daggers."
			}
		]
	},
	"Warcraft":{
		"Precision": [
			{
				"useType": "S",
				"effect": "Add 1 Melee weapons."
			}
		],
		"Precision Upgrade": [
			{
				"useType": "R",
				"effect": "Add 5 Melee weapons for a single strike. You must be standing behind your target, be able to see both of their shoulder blades, and strike them on the back to benefit from this power."
			}
		],
		"Vicious Strikes": [
			{
				"useType": "D",
				"effect": "Substitute Stun 15 seconds. Swing / Projectile"
			},
			{
				"useType": "D",
				"effect": "Your next 3 weapon strikes Add 4 Convert Bypass."
			}
		],
		"Vicious Strikes Upgrade": [
			{
				"useType": "D",
				"effect": "Gain an extra use of each sub-power granted by Vicious Strikes."
			}
		],
		"Killing Blow (Final)": [
			{
				"useType": "E",
				"effect": "Substitute 50 Bypass. Swing / Projectile"
			}
		],
		"Killing Blow (Final) Upgrade": [
			{
				"useType": "E",
				"effect": "Substitute 50 Bypass.",
				"deliveryType": "Swing"
			}
		]
	},
	"Weapon Mastery":{
		"Expertise": [
			{
				"useType": "S",
				"effect": "If a weapon\u2019s base type power is Exhausting, it becomes a Difficult power for you. If its base type power is Difficult, double any numbers in it. If its base type power is Sure, Add 1 with that weapon. Additional powers granted by non-crafted weapons are not affected."
			}
		],
		"Expertise Upgrade": [
			{
				"useType": "S",
				"effect": "Add 1 weapons."
			}
		],
		"Technique": [
			{
				"useType": "D",
				"effect": "You may Substitute Sleep 20 seconds or Stun 15 seconds.",
				"deliveryType": "Swing"
			},
			{
				"useType": "D",
				"effect": "Call Burst (your current melee weapon damage + 2). Heal 5."
			}
		],
		"Technique Upgrade": [
			{
				"useType": "D",
				"effect": "Gain two additional uses of the Burst from Technique."
			}
		],
		"Mastery": [
			{
				"useType": "E",
				"effect": "Substitute Disarm 30 seconds.",
				"deliveryType": "Swing"
			},
			{
				"useType": "E",
				"effect": "Substitute Disarm 30 seconds.",
				"deliveryType": "Swing"
			}
		],
		"Mastery Upgrade": [
			{
				"useType": "S",
				"effect": "Gain Immune to Disarm. Additionally, the first two Major Magic items you carry that are weapons do not count against your Major Magic item limit."
			}
		]
	},
	"Universal": {
		"Armor Training": [
			{
				"useType": "S",
				"effect": "The armor you wear is considered to be one Tier higher. (No armor at all is considered to be Tier 0.)"
			}
		],
		"Armor Training Upgrade": [
			{
				"useType": "S",
				"effect": "Receive another level of Armor Training. You may buy this Upgrade 4 times."
			}
		],
		"Combat Training": [
			{
				"useType": "S",
				"effect": "Enables use of two weapons (includes claw and weapon). Additionally, choose one of:"
			},
			{
				"useType": "S",
				"effect": "You may use a buckler. OR You gain +5 Max HP."
			}
		],
		"Combat Training Upgrade": [
			{
				"useType": "S",
				"effect": "Add 1 with weapons. This doesn\u2019t stack with any other non-weapon power that increases weapon damage."
			}
		],
		"Curious": [
			{
				"useType": "E",
				"effect": "You are good at finding clues and other helpful leads. At the start of each Day, you receive 3 Clue tokens, which expire at the end of the Day. You may give a Clue token to a Narrator to request additional insight, hints, or other information about a specific scene where you are present. This power does not work over distance. If the Narrator cannot give you any additional information, they will return your Clue token. Good examples of Clue token use: questioning a suspect (about some aspect of them that could be assessed in this manner, like an unusual accent or a notable tattoo), examining a crime scene (to find a footprint, scrap of clothing, or dropped item), or evaluating a magic item (to find a maker\u2019s mark, a secret compartment, or to remember seeing it elsewhere). Clue tokens cannot provide you with information it would be impossible for your character to have (such as the pass phrase for an army\u2019s encampment, a person\u2019s secret thoughts, or whether someone is telling the truth). Clues are not a lie detector.This may be used in conjunction with the Knowledge power, and use of a relevant Knowledge power does not require the expenditure of a Clue token."
			}
		],
		"Curious Upgrade": [
			{
				"useType": "E",
				"effect": "You receive an additional 3 Clue tokens each Day, which expire at the end of the Day."
			}
		],
		"Knowledge": [
			{
				"useType": "S",
				"effect": "You are knowledgeable about three particular subjects. OR"
			},
			{
				"useType": "S",
				"effect": "You know about one subject, and you also take Rank 1* with an Organization."
			}
		],
		"Knowledge Upgrade": [
			{
				"useType": "S",
				"effect": "Select either of the benefits of Knowledge. You may buy this Upgrade more than once."
			}
		],
		"Linguist": [
			{
				"useType": "S",
				"effect": "Choose any three languages from the list below. Regional languages: \u2022 Crocuta \u2013 the language of the desert gnoll tribes \u2022 Dutsvolk \u2013 the common language of the Hinterlands \u2022 Ember \u2013 the language of Embra-Jaka \u2022 Envalisianno \u2013 the language of the Dessanoran Confederation \u2022 H\u2019an\u2019a \u2013 the language of anDwapeh \u2022 The Jeweled Tongue \u2013 the language of the Jeweled Cities and the international trading language (all PCs speak this, but it is included here for completeness) \u2022 Kaewani \u2013 the language of Kaewan \u2022 Ma\u2019haran \u2013 the language of Maha\u2019vira and X\u2019a \u2022 Norvan \u2013 the common language of Northreach and Kjoldan \u2022 Papiahne \u2013 the common language of Corsairs \u2022 Prinyan \u2013 the language of Prinya"
			}
		],
		"Linguist Upgrade": [
			{
				"useType": "S",
				"effect": "You learn another three languages. You may buy this upgrade more than once."
			}
		],
		"Magic Talent": [
			{
				"useType": "S",
				"effect": "You gain 100 Kismet that can only be used to bind magic items. This Kismet does not return if you no longer possess the bounded item."
			}
		],
		"Magic Talent Upgrade": [
			{
				"useType": "S",
				"effect": "The first Major Magic items you own doesn\u2019t count against your Major Magic item limit."
			}
		],
		"Rank": [
			{
				"useType": "S",
				"effect": "You recieve Rank 2 in an Organization of your choice. Each time you buy this power you must choose a different Otganization."
			},
			{
				"useType": "E!",
				"effect": "You request a Favor from a specific Organization with whom you hold Rank. (You get one use of this power per Organization.)"
			}
		],
		"Rank Upgrade": [
			{
				"useType": "S",
				"effect": "You convert a Rank 2 into a Rank 3 in one Organization (APC).",
			}
		],
		"Social Butterfly": [
			{
				"useType": "E",
				"effect": "This power represents your character enjoying a positive reputation in society. At the start of an Event, choose a non-restricted Organization listed in this book that you do not currently have Rank with. For this Event, you are treated as having Rank 1 in that Organization, although you are not offically a member. This enables you to recruit Retainers and call upon a Favor one this Event. However, you do not gain the passive Benefits of the Organization, even if these would apply at your Rank. Instead of the usual Rank 1 title, you gain the title, Friend of (organization)",
			},
			{
				"useType": "S",
				"effect": "If you choose your Organization over email before an Event, you may receive Rumors at check-in. Otherwise, sometimes an NPC may send Rumors to you during game."
			}
		],
		"Social Butterfly Upgrade":[
			{
				"useType": "S",
				"effect": "You are treated as having Rank 2 and you may add the word Greater to your title.",
			}
		],
		"Rare Linguist": [
			{
				"useType": "S",
				"effect": "Choose any two languages from the lists below. Extradimensional Languages: \u2022 Cyrillian \u2013 the language of Cyrillia, a land on the other side of a strange portal Ancient languages: \u2022 Afrayen \u2013 the language of the Efreeti, ancient beings of Fire \u2022 Dushara \u2013 the language of the Dao, ancient beings of Earth \u2022 Eciton \u2013 this scent-based language can only be completely understood by characters with the Scent power. To speak it, you must be a Formian or spend 15 Build point in Alchemy (once) to create the necessary chemicals. Note: You may spend both of your language choices and 50 Kismet to ignore these requirements. \u2022 Kaldu \u2013 stone song, the language of the Great Below \u2022 Mandaean \u2013 the extinct language of an unknown desert people \u2022 Oranti \u2013 the predecessor of most modern surface languages \u2022 Sah-mat \u2013 the language of the Djinn, ancient beings of Air \u2022 Yerudav \u2013 the language of the Marid, ancient beings of Water"
			}
		],
		"Rare Linguist Upgrade": [
			{
				"useType": "S",
				"effect": "You learn another two rare languages. You may buy this upgrade more than once."
			}
		],
		"Lockpicking": [
			{
				"useType": "S",
				"effect": "Negate 1 level of Security on mundane locks. If you would gain this power twice, it stacks."
			}
		],
		"Lockpicking Upgrade": [
			{
				"useType": "S",
				"effect": "Receive another level of Lockpicking. You may buy this Upgrade more than once."
			}
		],
		"Rumors": [
			{
				"useType": "S",
				"effect": "You keep an ear out for what people are talking about in a given place (such as a District in a City). Usually Rumors will be given to you at the start of an Event, but sometimes an NPC may send them to you in game. Rumors are not guaranteed to be true."
			}
		],
		"Rumors Upgrade": [
			{
				"useType": "S",
				"effect": "Receive another level of Rumors. You may buy this Upgrade more than once."
			}
		],
		"Tracker": [
			{
				"useType": "D",
				"effect": "At the start of an Encounter, you may speak to a Narrator to receive information about the Encounter that would be obvious from tracks and the environment."
			}
		],
		"Tracker Upgrade": [
			{
				"useType": "R",
				"effect": "When you use Tracker, you receive more detailed information, including indicators of specific NPCs and warning about environmental hazards. You gain the title \u201cMaster Tracker\u201d."
			}
		],
		"Trap Finding": [
			{
				"useType": "E",
				"effect": "Allows you to discover (BUT NOT render harmless) any non-magical traps on a single object or in a 1-foot radius of your choice."
			}
		],
		"Trap Finding Upgrade": [
			{
				"useType": "S",
				"effect": "The base power becomes Difficult."
			}
		],
		"Trap Finding Upgrade": [
			{
				"useType": "S",
				"effect": "The base power becomes Difficult."
			}
		],
		"Artisan(Journeyman)":[
			{
				"useType": "S",
				"effect": "You gain the title of Journeyman in your chosen art or skill."
			},
			{
				"useType": "E!",
				"effect": "You earn 30 lunari by practicing your trade."
			}
		],
		"Artisan(Master)":[
			{
				"useType": "S",
				"effect": "You gain the title of Master in your chosen art or skill, and instead earn 60 lunari."
			}
		],
		"Artisan(Grand Master)":[
			{
				"useType": "S",
				"effect": "You gain the title of Grand Master in your chosen art or skill, and instead earn 90 lunari."
			}
		],
		"Artisan(Exalted)":[
			{
				"useType": "S",
				"effect": "You gain the title of Grand Master in your chosen art or skill, and instead earn 120 lunari."
			}
		],
		"Craft(Journeyman)":[
			{
				"useType": "S",
				"effect": "You gain the title of Journeyman in your chosen craft. You learn all (JM) marked patterns. You are Guild Certified."
			},
			{
				"useType": "E!",
				"effect": "Gain 30 Build Points in your chosen craft."
			}
		],
		"Craft(Master)":[
			{
				"useType": "S",
				"effect": "You gain the title of Master in your chosen craft. You learn all remaining patterns in that craft. Your build points increase to 50 per event."
			}
		],
		"Craft(Grand Master)":[
			{
				"useType": "S",
				"effect": "You gain the title of Grand Master in your chosen craft. You learn all remaining patterns in that craft. Your build points increase to 70 per event."
			}
		],
		"Craft(Exalted)":[
			{
				"useType": "S",
				"effect": "You gain the title of Exalted in your chosen craft. You learn all remaining patterns in that craft. Your build points increase to 90 per event. Artificers gain a Capstone slot, a pattern that represents the pinnacle of your skill."
			}
		],
	},
	"Aetherite": {
		"Elemental Bond": [
			{
				"useType": "S",
				"effect": "Your character gains Minimize (element) and vulnerable (opposing element)",
			}
		],
		"Elemental Flare": [
			{
				"useType": "E",
				"effect": "For this Encounter, you either gain 10 temporary HP or Add 1 All.",
			}
		]
	},
	"Celestine":{
		"Divine Healing": [
			{
				"useType": "D",
				"effect": "Heal 7. Touch.",
			}
		]
	},
	"Construct":{
		"Sentinel": [
			{
				"useType": "S",
				"effect": "Your character gains Immune to Stun and Sleep.",
			}
		],
		"Armored Soul": [
			{
				"useType": "S",
				"effect": "Your character gains Minimize Spirit.",
			}
		]
	},
	"Dhampir":{
		"Blood Drain": [
			{
				"useType": "D",
				"effect": "Feed on a willing, unconcious, or recently dead target with blood to Heal 5, Self, or gain 3 Temporary HP. Call 3 bypass.",
				"time": "Cast 5",
				"deliveryType": "touch",
			}
		],
		"Claws": [
			{
				"useType": "S",
				"effect": "You may use one or two claw boffers for 2 acid.",
			}
		]
	},
	"Dragonkin":{
		"Elemental Bond": [
			{
				"useType": "S",
				"effect": "Your character gains Minimize (element) and Vulnerable (opposing element).",
			}
		],
		"Claws": [
			{
				"useType": "S",
				"effect": "You may use one or two claw boffers for 2 (element).",

			}
		],
		"Dragon's Breath": [
			{
				"useType": "D",
				"effect": "Burst 5 (element)",

			}
		]
	},
	"Hill Dwarf":{
		"Crafty": [
			{
				"useType": "S",
				"effect": "When you buy Craft or Artisan the first time, you receive it's Upgrade for free.",
			}
		],
		"Stubborn": [
			{
				"useType": "D",
				"effect": "Resist 1 Sleep or Knockback.",
			}
		]
	},
	"Mountain Dwarf":{
		"Heritage": [
			{
				"useType": "S",
				"effect": "You recieve one of the following powers in the Universal tree for free: Combat Training, Knowledge, Rank.",
				"options":["Combat Training", "Knowledge", "Rank"],
			}
		],
	},
	"Dusk Elf":{
		"Fade": [
			{
				"useType": "D",
				"effect": "Go Out of Game for 10 seconds. Your next attack Adds 3.",
			}
		],
		"Tracker": [
			{
				"useType": "S",
				"effect": "You receive the Tracker power in the Universal Tree for free.",
				"options": ["Tracker"],
			}
		]
	},
	"Moon Elf":{
		"Hard to Hit": [
			{
				"useType": "D",
				"effect": "Gain 1 Dodge.",
			}
		],
		"Lunar Armor": [
			{
				"useType": "D",
				"effect": "Resist a Status Effect.",
			}
		]
	},
	"Sun Elf":{
		"Talent": [
			{
				"useType": "S",
				"effect": "You receive one of the following powers in the Universal or Craft trees for free:  Artisan, Knowledge, Linguist, or Rank.",
				"options":["Artisan(Journeyman)", "Knowledge", "Linguist", "Rank"],
			}
		],
	},
	"Fellblooded":{
		"Soul of Fire": [
			{
				"useType": "S",
				"effect": "Your character gains Vulnerable Spirit. Additionally, You may use one or two claw boffers for 2 Fire.",
			},
		],
		"Hellblast": [
			{
				"useType": "D",
				"effect": "10 fire.",
				"deliveryType": "Packet",
			}
		]
	},
	"Feytouched":{
		"Mercurial Mind": [
			{
				"useType": "D",
				"effect": "Resist 1 Dominate, Fear, Sleep, or Taunt.",
			},
		],
		"Court-Marked": [
			{
				"useType": "S",
				"effect": "[Court] Court might take interest in your character. Fey of opposing courts may dislike you.",
			}
		]
	},
	"Formian":{
		"Carapace": [
			{
				"useType": "S",
				"effect": "You receive the Armor Training power in the Universal tree for free.",
				"options":["Armor Training"],
			},
		],
		"Acidic Blood": [
			{
				"useType": "S",
				"effect": "You minimize Acid.",
			}
		],
		"Scent Speech": [
			{
				"useType": "S",
				"effect": "You may request scent-based information from Narrators. Gain an additional Acient Language: Eciton.",
			}
		],
	},
	"Gnoll":{
		"Thick Hide": [
			{
				"useType": "S",
				"effect": "You recieve the Armor Training power in the Universal tree for free.",
				"options":["Armor Training"],
			},
		],
		"Scent": [
			{
				"useType": "S",
				"effect": "You may request scent-based information from Narrators. Gain an additional Regional Language: Crocuta.",
			}
		],
		"Claws": [
			{
				"useType": "S",
				"effect": "You may use one or two claw boffers for 2 normal.",
			}
		],
	},
	"Hiwani":{
		"Adaptation": [
			{
				"useType": "S",
				"effect": "Choose one of these two: Scent: You may request scent-based information from Narrators. Swimming: You are Immune to the Water Encounter Modifier.",
			},
		],
		"Claws": [
			{
				"useType": "S",
				"effect": "You may use one or two claw boffers for 3 normal.",
			}
		],
	},
	"High Human":{
		"Privilege": [
			{
				"useType": "S",
				"effect": "You receive one of the followering powers in the Universal tree for free: Knowledge, Linguist, Rank.",
				"options":["Knowledge", "Linguist", "Rank"],
			},
		],
	},
	"Low Human":{
		"Martial": [
			{
				"useType": "S",
				"effect": "You receive the Combat Training power in the Universal tree for free.",
				"options":["Combat Training"],
			},
		],
	},
	"Orc":{
		"Hard to Kill": [
			{
				"useType": "S",
				"effect": "Double the effect of any Heals that target you.",
			},
		],
		"Persistent": [
			{
				"useType": "D",
				"effect": "Resist 1 Stun or Knockback.",
			}
		],
	},
	"Sah'jann":{
		"Elemental Bond": [
			{
				"useType": "S",
				"effect": "You character gains Minimize Air and Vulnerable Earth.",
			},
		],
		"Master Linguist": [
			{
				"useType": "S",
				"effect": "You speak Oranti and Sah'mat as well as your usual languages. If you buy Linguist (or it's upgrade), you choose 2 additional languages with each purchase and 1 additional language with Rare linguist (or it's upgrade).",
			}
		],
		"Burst of Air":[
			{
				"useType": "D",
				"effect": "You summon a puff of air to launch you elsewhere on the battlefield. Call Burst 5 Air and go Out of Game for up to 10 seconds.",
			}
		],
	},
	"Shar'vin":{
		"Crystalline Mind": [
			{
				"useType": "S",
				"effect": "Your character gains Immune to Dominate, Fear, Sleep, and Taunt.",
			},
		],
	},
	"Stoneborn":{
		"Climber": [
			{
				"useType": "S",
				"effect": "Your claws enable you to easily climb some surfaces. Occasionally, problems can be resolved by climbing.",
			},
		],
		"Claws": [
			{
				"useType": "S",
				"effect": "You may use one or two claw boffers for 2 earth.",
			}
		],
		"Stone Skin":[
			{
				"useType": "S",
				"effect": "You receive the Armor Training power in the Universal tree for free.",
			}
		],
	},
	"Waterborn":{
		"Swimmer": [
			{
				"useType": "S",
				"effect": "You swim with agility and hold your breath longer than other lineages. You are Immune to the Water Encounter Modifier.",
			},
		],
		"Claws": [
			{
				"useType": "S",
				"effect": "You may use one or two claw boffers for 3 Normal.",
			}
		],
		"Regeneration":[
			{
				"useType": "D",
				"effect": "Heal 5 HP, Self. This power may be used while unconcious, but if so, has a 10 second cast time. You may complete the casting count silently.",
			}
		],
	},
}

window.skills = skillsData;