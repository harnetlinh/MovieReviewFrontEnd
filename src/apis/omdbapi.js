import axios from 'axios'
const apiKey = '88c4233e'
const urlAPI = {
    // get omdbapi
    urlGET_OMDBAPI: `http://www.omdbapi.com`,
};

/**
 * Validate a full-lowercase string
 * @return {Array}
 * @param {string} name
 * @param {number} year
 */
export function getFilmID(name, year) {
    const params = {apikey: apiKey, s: name, y: year}
    return axios.get(
            urlAPI
            .urlGET_OMDBAPI, {params});
}
/**
 * Validate a full-lowercase string
 * @return {Object}
 * @param {string} id
 */
export function getFilmInfo(id) {
    const params = {apikey: apiKey, i: id}
    return axios.get(
            urlAPI
            .urlGET_OMDBAPI, {params});
}