import { Children, ReactElement } from 'react';
import styles from './QuestionSet.module.css';
import Title from './title/Title';
import { QuestionProps } from './question/Question';
import useQuestionSequencer from './UseQuestionSequencer';
import { Button } from '@mui/material';

interface QuestionSetProps {
  title: string;
  children: ReactElement<QuestionProps>[];
}

export default function QuestionSet({ title, children }: QuestionSetProps) {
  const { increment, decrement, currentQuestionIndex } = useQuestionSequencer({
    questionIds: Children.map(children, (child) => {
      return (child as ReactElement).props.id;
    })
  });

  const childrenLength = Children.count(children) - 1;

  return (
    <div className={styles['container']}>
      <Title title={title} />
      <div className={styles['scrollable-content-wrapper']}>{children}</div>
      <footer className={styles['footer']}>
        <Button
          disabled={currentQuestionIndex === 0}
          onClick={decrement}
          variant="outlined"
        >
          Back
        </Button>

        <Button
          disabled={currentQuestionIndex === childrenLength}
          onClick={increment}
          variant="outlined"
        >
          Next
        </Button>
      </footer>
    </div>
  );
}
