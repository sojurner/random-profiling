import { useState, useEffect } from 'react';

import { getRandomUsers } from '~api/randomUser';
import { getRandomPic } from '~api/unsplash';

import { IUser } from '~types/api';
import { getRandomPoems } from '~api/poemist';
import { fetchNews } from '~api/news';

const useRandomUsersApiHook = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(state => !state);

      const randomUsers = await getRandomUsers();
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

export {
  useRandomUsersApiHook,
  useUnsplashPicApiHook,
  usePoemistApiHook,
  useNewsApiHook
};
