import React from 'react';
import Skeleton from 'react-loading-skeleton';

import WeatherCurrent from '~components/WeatherInfo/WeatherCurrent';
import WeatherWeekly from '~components/WeatherInfo/WeatherWeekly';

import styles from './Card.module.scss';

const WeatherCardSkeleton = () => (
  <Skeleton count={1} height={230} width={400} />
);

const WeatherCard: React.FC<{
  daily: any;
  weekly: any;
}> = ({ daily, weekly }) => {
  return (
    <section className={styles.card__weather}>
      <WeatherCurrent
        summary={daily.summary}
        icon={daily.icon}
        current={daily.temperature}
        high={daily.high}
        low={daily.low}
      />
      <WeatherWeekly forecast={weekly} />
    </section>
  );
};

export { WeatherCardSkeleton, WeatherCard as default };
