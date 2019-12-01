import React from 'react';

import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';
import WeatherIcon from '~components/WeatherInfo/WeatherIcon';

import styles from './WeatherInfo.module.scss';

const WeatherCurrent: React.FC<{
  icon: string;
  current: string;
  summary: string;
  high: string;
  low: string;
}> = ({ icon, summary, current, high, low }) => {
  return (
    <div className={styles.weatherCurrent}>
      <Typography
        variant="p"
        children={current}
        className="weatherInfo__current"
      />
      <FlexBox textAlign="center" marginLeft={10} flexDirection="column">
        <Typography
          variant="h6"
          children={high}
          className="weatherInfo__high"
        />
        <Typography variant="h6" children={low} className="weatherInfo__low" />
      </FlexBox>
      <div className={styles.weatherCurrent__highLow}>
        <WeatherIcon
          style={{ fontSize: '2.5em', display: 'flex', marginRight: 5 }}
          iconName={icon}
        />
        <Typography variant="p" children={summary} className="" />
      </div>
    </div>
  );
};

export default WeatherCurrent;
