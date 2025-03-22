import { ReactNode } from 'react'
import styles from './CardArea.module.css'

interface CardAreaProps {
    children: ReactNode
}

export default function CardArea({children}: CardAreaProps) {

    return (
        <div className={styles['card-layout']}>
            <div className={styles['card']}>
                {children}
            </div>
        </div>
    )
}