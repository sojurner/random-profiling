import { monthNames } from '~utils/date';

const fetchWeather = async (lat: string, lng: string) => {
  const darkSkyURL = `https://weatherlee-server.herokuapp.com/api/darksky?latitude=${lat}&longitude=${lng}`;
  return scrapeWeather(await (await fetch(darkSkyURL)).json());
};

const scrapeWeather = (raw: any) => {
  const [dailyWeather] = raw.daily.data;

  const { temperatureHigh, temperatureLow } = dailyWeather;

  const daily = {
    temperature: `${Math.floor(raw.currently.temperature)}°`,
    summary: raw.hourly.summary,
    icon: raw.currently.icon,
    high: `${Math.floor(temperatureHigh)}°`,
    low: `${Math.floor(temperatureLow)}°`
  };

  const weekly = raw.daily.data.slice(1).map((day: any) => {
    const { icon, time } = day;
    const date = new Date(time * 1000);

    return {
      date: `${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()}`,
      icon,
      high: `${Math.floor(day.temperatureHigh)}°`,
      low: `${Math.floor(day.temperatureLow)}°`
    };
  });

  return { daily, weekly };
};

export { scrapeWeather, fetchWeather };
