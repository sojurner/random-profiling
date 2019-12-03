const kanyeURL: string = 'https://api.kanye.rest';

const getRandomKanyeQuote = async () => {
  try {
    const response = await fetch(kanyeURL);
    if (response.status === 200) {
      return (await response.json()).quote;
    } else {
      return { error: 'Something went wrong' };
    }
  } catch (error) {
    return { error };
  }
};

export { getRandomKanyeQuote };
