import styles from './Heading.module.css';

type SizeType = 'M' | 'L'

interface HeadingProps {
    size: SizeType
    children: any
}

export default function Heading({ size, children }: HeadingProps) {
    return (
    
        <div className={`${styles['heading']} ${styles[`heading-${size}`]}`}>
            <div>{children}</div>
            <div className={`${styles['line']} ${styles[`line-${size}`]}`} />
        </div>
    );
}
