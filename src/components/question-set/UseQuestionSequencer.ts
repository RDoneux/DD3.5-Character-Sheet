import { useEffect, useState } from 'react';

interface useQuestionSequencerProps {
  questionIds: string[];
}

export default function useQuestionSequencer({
  questionIds
}: useQuestionSequencerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  useEffect(() => {
    window.location.hash = questionIds[currentQuestionIndex];
  }, [currentQuestionIndex]);

  function increment() {
    if (currentQuestionIndex === questionIds.length - 1) return;
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function decrement() {
    if (currentQuestionIndex === 0) return;
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  return { increment, decrement, currentQuestionIndex };
}
