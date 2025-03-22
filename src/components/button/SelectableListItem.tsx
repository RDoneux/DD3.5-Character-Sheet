import styles from './SelectableListItem.module.css'

type ButtonAction = () => void

interface SelectableListItemProps {
    
    children: JSX.Element,
    
    onClick: ButtonAction,

    // True when list item is selected
    isSelected?: boolean

    // True when list item is disabled
    isDisabled?: boolean
}

export default function SelectableListItem({children, onClick, isSelected, isDisabled}: SelectableListItemProps) {
    return (
            <button 
                disabled={isDisabled}
                className={`${styles['button']} ${isSelected && styles['selected']} ${isDisabled && styles['disabled']}`}
                onClick={onClick}
            >
                {children}
            </button>
    )
}