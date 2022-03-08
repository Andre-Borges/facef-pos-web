import axios from 'axios';

const baseURL = 'https://star-wars-api-facefx.herokuapp.com';

export const getFilms = async () => {
    return axios.request({
        baseURL,
        url: 'films'
    });
}

export const getFilmById = async (id: number) => {
    return axios.request({
        baseURL,
        url: `films/${id}`
    });
}