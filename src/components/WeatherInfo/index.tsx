import React from 'react';

import { useDarkskyApiHook } from '~utils/hooks/apiHooks';
import WeatherCard, {
  WeatherCardSkeleton
} from '~components/Cards/WeatherCard';
import CategoryHeader from '~components/Headers/CategoryHeader';

const WeatherInfo: React.FC<{ latitude: string; longitude: string }> = ({
  latitude,
  longitude
}) => {
  const [forecast, loading] = useDarkskyApiHook(latitude, longitude);

  return forecast && !loading ? (
    <>
      <CategoryHeader style={{ marginTop: 30 }} children={'Weather'} />
      <WeatherCard daily={forecast.daily} weekly={forecast.weekly} />
    </>
  ) : (
    <WeatherCardSkeleton />
  );
};

export default WeatherInfo;
