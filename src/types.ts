export interface CharacterClassData {
    name: string
    abbreviation: string
}
export type CharacterClass = 'BARBARIAN' | 'BARD' | 'CLERIC' | 'DRUID' | 'FIGHTER' | 'MONK' | 'PALADIN' | 'RANGER' | 'ROGUE' | 'SORCERER' | 'WIZARD'
export const CharacterClasses: {[key in CharacterClass]: CharacterClassData} = {
    BARBARIAN: {
        name: "Barbarian",
        abbreviation: "Bbn"
    },
    BARD: {
        name: "Bard",
        abbreviation: "Brd"
    },
    CLERIC: {
        name: "Cleric",
        abbreviation: "Clr"
    },
    DRUID: {
        name: "Druid",
        abbreviation: "Drd"
    },
    FIGHTER: {
        name: "Fighter",
        abbreviation: "Ftr"
    },
    MONK: {
        name: "Monk",
        abbreviation: "Mnk"
    },
    PALADIN: {
        name: "Paladin",
        abbreviation: "Pal"
    },
    RANGER: {
        name: "Ranger",
        abbreviation: "Rgr"
    },
    ROGUE: {
        name: "Rogue",
        abbreviation: "Rog"
    },
    SORCERER: {
        name: "Sorcerer",
        abbreviation: "Sor"
    },
    WIZARD: {
        name: "Wizard",
        abbreviation: "Wiz"
    }
} as const;
