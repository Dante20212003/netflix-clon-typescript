import { NetflixItem } from './../interfaces.d';

export const fetchAllSeries = async () => {
    const response = await fetch("/src/utils/Data/Json/AllSeries.json");
    const data = await response.json();
    return data
}
export const fetchFilters = async () => {
    const response = await fetch("/src/utils/Data/Json/Generos.json");
    const data = await response.json();
    return data
}

export const itemInfoData = async (id: string, type: string) => {
    let response

    if (type === "movie") {
        response = await fetch("/src/utils/Data/Json/AllMovies.json");

    } else {
        response = await fetch("/src/utils/Data/Json/AllSeries.json");
    }


    const data: NetflixItem[] = await response.json();

    const itemData = data.filter(item => item.imdb_id === id)

    return itemData

}