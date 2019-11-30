const unsplashURL = 'https://source.unsplash.com/random';

const getRandomPic = async () => {
  const response = await fetch(`${unsplashURL}`);
  if (response.status === 200) {
    return response.url;
  } else {
    return { error: 'Something went wrong' };
  }
};

export { getRandomPic };
