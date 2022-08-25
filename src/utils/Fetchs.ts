import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY

export const getAllMovies = async () => {

    const options = {
        method: 'GET',
        url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
        params: { limit: '20000', order_by: 'date' },
        headers: {
            'X-RapidAPI-Key': '9c4061556emsh1aff6d6267de9ebp13b4fejsn7765f59b1fa5',
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        }
    };

    const { data } = await axios.request(options)

    return data
    /* axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    }); */
}
export const getDataTitles = (limit: number = 50) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL}search/titles`,
        params: { limit: limit, order_by: 'date', type: 'movie' },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.error(error);
    });
};

export const getDataDeletes = (limit: number = 50) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL}search/deleted`,
        params: { limit: limit },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}