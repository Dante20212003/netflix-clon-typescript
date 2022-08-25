import { NetflixItem } from "../interfaces";

export const searchMoviesSeries = async (title: string) => {
  const response = await fetch("/src/utils/Data/Json/AllMovies.json");
  const response2 = await fetch("/src/utils/Data/Json/AllSeries.json");

  const data: NetflixItem[] = await response.json();
  const data2: NetflixItem[] = await response2.json();

  const all = data.concat(data2);

  const filtrado = all.filter(
    (item) =>
      item.title.toLowerCase().includes(title.toLowerCase()) ||
      item.synopsis.toLowerCase().includes(title.toLowerCase())
  );

  return filtrado;
};
