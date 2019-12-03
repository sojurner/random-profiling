import React from 'react';
import { createPortal } from 'react-dom';

const rootNode: Element = document.querySelector('#root') as Element;

interface ClickAwayListenerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ClickAwayListener: React.FC<ClickAwayListenerProps> = props => {
  return createPortal(
    <div
      style={{
        height: '100vh',
        position: 'absolute',
        width: '100vw',
        top: 0,
        left: 0,
        zIndex: 1
      }}
      id={'click-away-listener'}
      {...props}
    />,
    rootNode
  );
};

export default ClickAwayListener;
