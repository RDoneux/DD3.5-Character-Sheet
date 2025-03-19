import React, { PropsWithChildren } from 'react';
import styles from './QuestionSet.module.css';
import Title from './title/Title';

interface QuestionSetProps extends PropsWithChildren {
  title: string;
}

export default function QuestionSet({ title, children }: QuestionSetProps) {
  return (
    <div className={styles['container']}>
      <Title title={title} />
      <div
        style={{ width: `${React.Children.count(children)}00%` }}
        className={styles['scrollable-content-wrapper']}
      >
        {React.Children.map(children, (child) => (
          <div className={styles['scrollable-content']}>{child}</div>
        ))}
      </div>
      <footer>
        <button>Back</button>
        <button>Next</button>
      </footer>
    </div>
  );
}
