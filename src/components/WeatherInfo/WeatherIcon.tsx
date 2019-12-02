import React from 'react';
import { weatherIcons } from '~assets/weatherIcons';

interface WeatherIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  iconName: string;
}

const CustomJSX: React.FC<{ iconName: string }> = ({ iconName }) => {
  const iconProps = [...weatherIcons[iconName]];
  const children = iconProps.slice(1).map((element, index) => {
    return React.createElement(
      element.type,
      { key: `jsx-icon-${index}`, ...element.props },
      null
    );
  });
  return React.createElement('svg', { ...iconProps[0].props }, children);
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconName, ...props }) => (
  <span {...props}>
    <CustomJSX iconName={iconName} />
  </span>
);

export default WeatherIcon;
