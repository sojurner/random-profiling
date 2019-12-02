import React from 'react';
import { TweenMax } from 'gsap';
import FlexBox from '~components/Flexbox';

const GreetingHeader: React.FC = props => {
  let greetingRef = React.useRef<HTMLHeadingElement>(null);
  let buttonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (greetingRef.current && buttonRef.current) {
      TweenMax.from(greetingRef.current, 0.8, {
        x: -20,
        delay: 0.2
      });
      TweenMax.from(buttonRef.current, 0.8, {
        x: 20,
        delay: 0.2
      });
    }
  }, []);

  return (
    <FlexBox
      position="absolute"
      top="40%"
      left="50%"
      transform="translate(-50%, -50%)"
      flexDirection="column"
      alignItems="center"
    >
      <h1 ref={greetingRef}>W E L C O M E</h1>
      <div ref={buttonRef}>{props.children}</div>
    </FlexBox>
  );
};

export default GreetingHeader;
