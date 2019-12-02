import { useState, useEffect } from 'react';

import { getRandomUsers } from '~api/randomUser';
import { getRandomPic } from '~api/unsplash';
import { getRandomPoems } from '~api/poemist';
import { fetchNews } from '~api/news';
import { fetchWeather } from '~api/darksky';
import { getRandomKanyeQuote } from '~api/kanye';

const useRandomUsersApiHook = (userCount: number) => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(state => !state);

      const randomUsers = await getRandomUsers(userCount);
      setUsers(randomUsers);
      setLoading(state => !state);
    })();
  }, []);

  return [users, loading];
};

const useUnsplashPicApiHook = (username: string) => {
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(state => !state);
      const randomPic = await getRandomPic();
      setPic(randomPic);
      setLoading(state => !state);
    })();
  }, [username]);

  return [pic, loading];
};

const usePoemistApiHook = (path: string) => {
  const [poems, setPoems] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(state => !state);
      const randomPoems = await getRandomPoems();
      setPoems(randomPoems);
      setLoading(state => !state);
    })();
  }, [path]);

  return [poems, loading];
};

const useNewsApiHook = () => {
  const [newsFeed, setNewsFeed] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(state => !state);
      const news = await fetchNews();
      setNewsFeed(news);
      setLoading(state => !state);
    })();
  }, []);

  return [newsFeed, loading];
};

const useDarkskyApiHook = (latitude: string, longitude: string) => {
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const weatherData = await fetchWeather(latitude, longitude);
      setForecast(weatherData);
      setLoading(false);
    })();
  }, [latitude, longitude]);

  return [forecast, loading];
};

const useKanyeApiHook = (count: number) => {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [collaspedComments, setCollapsedComments] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      for (let i = 0; i < count; i++) {
        const randomQuote = await getRandomKanyeQuote();
        setQuotes(state => [...state, randomQuote]);
      }
      setLoading(false);
    })();
  }, []);

  const handleCommentsToggle = (command: boolean) => {
    setCollapsedComments(command);
  };

  return [quotes, loading, collaspedComments, handleCommentsToggle];
};

export {
  useRandomUsersApiHook,
  useUnsplashPicApiHook,
  usePoemistApiHook,
  useNewsApiHook,
  useDarkskyApiHook,
  useKanyeApiHook
};
