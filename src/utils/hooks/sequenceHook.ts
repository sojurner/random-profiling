import { useState, useEffect } from 'react';
import NH from 'history';

type TakeTypeGiveNone<T> = (arg: T) => void;

const useSequenceHook = (
  sequenceLength: number
): [number, TakeTypeGiveNone<null>, TakeTypeGiveNone<NH.History>] => {
  const [currentSequence, setCurrentSequence] = useState<number>(
    sequenceLength
  );

  useEffect(() => {
    setTimeout(() => {
      nextSequence(null);
    }, 2500);
  }, []);

  const nextSequence: TakeTypeGiveNone<null> = () => {
    setCurrentSequence(state => state - 1);
  };

  const pushPath: TakeTypeGiveNone<NH.History> = history => {
    history.push('/create-profile');
  };

  return [currentSequence, nextSequence, pushPath];
};

export { useSequenceHook };
