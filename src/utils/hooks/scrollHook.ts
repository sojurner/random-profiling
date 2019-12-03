import { useEffect } from 'react';
import H from 'history';

const useScrollToTopHook = (location: H.Location) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return [];
};

export { useScrollToTopHook };
