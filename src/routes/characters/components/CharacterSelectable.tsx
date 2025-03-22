import styles from './CharacterSelectable.module.css'
import { CharacterDetails } from '../Characters'
import SelectableListItem from '../../../components/button/SelectableListItem'

interface CharacterSelectableProps {
    character: CharacterDetails
}

export default function CharacterSelectable(props: CharacterSelectableProps) {
    return (
        <SelectableListItem onClick={() => alert("Selected " + props.character.name)}>
            <>
                <div className={styles['image']}>
                    <div style={{backgroundColor: '#EEEEEE', width: 48, height: 48, marginTop: 8, marginBottom: 7 }}></div>   
                </div>
                <div>
                    <div className={styles['name']}>{props.character.name}</div>
                    <div className={styles['clazz']}>{props.character.clazz}</div>
                </div>
            </>
        </SelectableListItem>
    )
}
