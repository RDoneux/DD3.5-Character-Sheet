import styles from './Characters.module.css';
import Heading from '../../components/heading/Heading';
import { Character } from './types';
import { v4 as uuidv4 } from 'uuid';
import CharacterSelectable from './components/CharacterSelectable';
import { CharacterClass } from '../../types';
import CardArea from '../../components/card/CardArea';

// Changing this may mean loss of data for users
const CHARACTERS_STORAGE_KEY = 'characters'

export interface CharacterDetails {
    name: string
    clazz: CharacterClass
}

export default function Characters() {
    const seedData = (id: string) => {
        localStorage.setItem(CHARACTERS_STORAGE_KEY + ':' + id, JSON.stringify({
            name: "Korra",
            clazz: 'DRUID'
        }))
    }

    const loadCharacters = (): Character[] => {
        const characterString = localStorage.getItem(CHARACTERS_STORAGE_KEY)
        
        if (characterString !== null) {
            return JSON.parse(characterString)
        }

        return []
    }   

    const retrieveCharacterDetails = (character: Character): CharacterDetails | undefined => {
        const maybeCharacterDetails = localStorage.getItem(CHARACTERS_STORAGE_KEY + ":" + character.id)

        if(maybeCharacterDetails !== null) {
            return JSON.parse(maybeCharacterDetails)
        }

        return undefined
    }

    const createNewCharacter = (): string => {
        const characters = loadCharacters()
        const id: string = uuidv4()
        
        const newCharacters: Character[] = [
            ...characters,
            {id}
        ]

        localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(newCharacters))

        // TODO Remove once flow in place, this is for testing only
        seedData(id)

        return id
    }  

    // TODO Replace when proxy is live
    const characters: Character[] = loadCharacters()
    
    return (
        <CardArea>
           <Heading size='L'>Characters</Heading>
           <div className={styles['scrollable']}>
                {
                    characters
                        .map(retrieveCharacterDetails)
                        .filter((maybeDetails: CharacterDetails | undefined) => !!maybeDetails)
                        .map((details: CharacterDetails) => <CharacterSelectable key={uuidv4()} character={details}/>)
                }
                <button onClick={() => createNewCharacter()}>
                    Create new character
                </button>
           </div>
        </CardArea>
    );
}
