import { useState, useEffect } from 'react';

type TakeNoneGiveNone = () => void;

const useSequenceHook = (
  sequenceLength: number
): [number, TakeNoneGiveNone] => {
  const [currentSequence, setCurrentSequence] = useState<number>(
    sequenceLength
  );

  useEffect(() => {
    setTimeout(() => {
      nextSequence();
    }, 2500);
  }, []);

  const nextSequence: TakeNoneGiveNone = () => {
    setCurrentSequence(state => state - 1);
  };

  return [currentSequence, nextSequence];
};

export { useSequenceHook };
