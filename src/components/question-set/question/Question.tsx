import { PropsWithChildren } from 'react';
import styles from './Question.module.css';

export interface QuestionProps extends PropsWithChildren {
  id: string;
}

export default function Question({ id, children }: QuestionProps) {
  return (
    <div className={styles['scrollable-content']} id={id}>
      {children}
    </div>
  );
}
