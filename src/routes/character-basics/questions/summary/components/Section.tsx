import { PropsWithChildren } from 'react';
import styles from './Section.module.css';

interface SectionProps extends PropsWithChildren {
  title: string;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className={styles['section']}>
      <h5>{title}</h5>
      {children}
    </div>
  );
}
