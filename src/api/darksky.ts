export const fetchWeather = async (lat: string, lng: string) => {
  const url = `https://weatherlee-server.herokuapp.com/api/darksky?latitude=${lat}&longitude=${lng}`;
  return scrapeWeather(await (await fetch(url)).json());
};

export const scrapeWeather = (raw: any) => {
  const [dailyWeather] = raw.daily.data;

  const { temperatureHigh, temperatureLow } = dailyWeather;

  return {
    temperature: `${Math.floor(raw.currently.temperature)}°`,
    icon: raw.minutely.icon,
    high: `${Math.floor(temperatureHigh)}°`,
    low: `${Math.floor(temperatureLow)}°`
  };
};
