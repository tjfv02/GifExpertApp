export const getGifs = async (category = "Hola") => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=WKPqU1CPJF2kwBPj9zctg42Lr6CWmFK9&q=${category}&limit=10`;
  const response = await fetch(URL);
  const { data = [] } = await response.json();
  const dataGifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  console.log(dataGifs);
  return dataGifs;
};
