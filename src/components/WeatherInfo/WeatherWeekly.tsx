import React from 'react';
import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';

import styles from './WeatherInfo.module.scss';
import WeatherIcon from './WeatherIcon';

interface IWeeklyWeatherProps {
  high: string;
  low: string;
  date: string;
  icon: string;
}

const WeatherWeekly: React.FC<{ forecast: IWeeklyWeatherProps[] }> = ({
  forecast
}) => {
  return (
    <div className={styles.weatherWeekly}>
      {forecast.map((weatherInfo, index) => (
        <FlexBox
          key={`weatherWeekly-${index}`}
          position="relative"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h3"
            children={weatherInfo.date}
            className="weatherInfo__date"
          />
          <WeatherIcon
            style={{ display: 'flex', fontSize: '1.5em' }}
            iconName={weatherInfo.icon}
          />
          <FlexBox key={`weeklyWeather-${index}`}>
            <Typography
              variant="p"
              children={weatherInfo.high}
              className="weatherInfo__high"
            />
            <FlexBox margin="0 2.5px" />
            <Typography
              variant="p"
              children={weatherInfo.low}
              className="weatherInfo__low"
            />
          </FlexBox>
        </FlexBox>
      ))}
    </div>
  );
};

export default WeatherWeekly;
