import { NetflixItem } from './../interfaces.d';
import Terror from "./Json/TerrorMovies.json"
import Drama from "./Json/DramaMovies.json"
import Anime from "./Json/AnimeMovies.json"
import Documentales from "./Json/DocumentalesMovies.json"
import Koreanos from "./Json/KoreanMovies.json"
import Suspenso from "./Json/SuspenseMovies.json"
import MainMovies from "./Json/MainMovies.json"


export const DataSmallCategory = (category: string): NetflixItem[] => {
    let tamanio;
    let random;

    switch (category) {
        case "anime":
            tamanio = Anime.length - 21;
            random = Math.floor(Math.random() * tamanio)

            return Anime.slice(random, random + 20)

        case "documentales":
            tamanio = Documentales.length - 21;
            random = Math.floor(Math.random() * tamanio)
            return Documentales.slice(random, random + 20)

        case "dramas":
            tamanio = Drama.length - 21;
            random = Math.floor(Math.random() * tamanio)
            return Drama.slice(random, random + 20)

        case "main":
            return MainMovies

        case "koreanos":
            tamanio = Koreanos.length - 21;
            random = Math.floor(Math.random() * tamanio)
            return Koreanos.slice(random, random + 20)

        case "suspenso":
            tamanio = Suspenso.length - 21;
            random = Math.floor(Math.random() * tamanio)
            return Suspenso.slice(random, random + 20)

        case "terror":
            tamanio = Terror.length - 21;
            random = Math.floor(Math.random() * tamanio)
            return Terror.slice(random, random + 20)

        default:
            return []
    }
}

/* export const DataCategoryTerror: NetflixItem[] = [Terror] */

export const ramdomData = (data: NetflixItem[]) => {
    const tamanio = data.length + 1;
    const newArrayData: NetflixItem[] = []
    const arrayRepetidos: number[] = []

    // console.log(Math.floor(Math.random() * tamanio))
    let i = 0
    while (i < 20) {
        const ramdomNumber = Math.floor(Math.random() * tamanio)

        if (!arrayRepetidos.includes(ramdomNumber)) {
            newArrayData.push(data[ramdomNumber])
            arrayRepetidos.push(ramdomNumber)
            i++;
        }
    }

    return newArrayData
}