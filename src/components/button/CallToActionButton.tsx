import styles from './CallToActionButton.module.css';

export type ButtonAction = () => void

interface CallToActionButtonProps {
    onClick: ButtonAction
    text: string
    altStyle?: boolean
    isDisabled?: boolean
}

export default function CallToActionButton(props: CallToActionButtonProps) {
    return (
    
        <button
            disabled={props.isDisabled} 
            onClick={props.onClick} 
            className={`${styles['cta']} ${props.altStyle && styles['secondary']} ${props.isDisabled && styles['disabled']}`}
        >
            {props.text ?? "CTA"}
        </button>
    );
}
