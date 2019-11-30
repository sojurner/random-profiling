import React from 'react';

/* 
  description: Generic Flex Styling Wrapper
  
  props: children - content to be rendered
         props - any valid JS styling key:value. ex: fontSize="10px"
*/

const FlexBox: React.FC<React.CSSProperties> = ({ children, ...props }) => (
  <div style={{ display: 'flex', ...props }} children={children} />
);

export default FlexBox;
