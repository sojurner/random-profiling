interface INews {
  title: string;
  url: string;
  urlToImage: string;
  src: string;
}

const fetchNews = async () => {
  const url = 'https://weatherlee-server.herokuapp.com/api/news';
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return scrapeNews(await response.json());
    } else {
      return { error: 'Something went wrong' };
    }
  } catch (error) {
    return { error };
  }
};

const scrapeNews = (news: any): INews => {
  return news.articles.map(
    (article: {
      title: string;
      url: string;
      urlToImage: string;
      source: { name: string };
    }) => {
      const { title, url, urlToImage, source } = article;
      const newsTitle = title.slice(0, title.indexOf('-'));
      return {
        title: newsTitle,
        url,
        urlToImage,
        src: source.name
      };
    }
  );
};

export { fetchNews, scrapeNews };
