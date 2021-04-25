import axios from 'axios'
const urlAPI = {
    // get all review of specific user_id
    urlGET_AllReview: `http://127.0.0.1:3000/api/allreview`,

    // get all review of specific movie_id
    urlGET_ReviewByMovie: `http://127.0.0.1:3000/api/get-review`,

    // submit review 
    urlPOST_AddReview: `http://127.0.0.1:3000/api/addReview`,
};

/**
 * Validate a full-lowercase string
 * @return {Array}
 * @param {string} name
 * @param {number} year
 */
export function getAllReview(user_id) {
    const params = {user_id: user_id}
    return axios.get(
            urlAPI
            .urlGET_AllReview, {params});
}

/**
 * Validate a full-lowercase string
 * @return {Array}
 * @param {string} name
 * @param {number} year
 */
 export function getReviewByMovie(movie_id) {
    const params = {movie_id: movie_id}
    return axios.get(
            urlAPI
            .urlGET_ReviewByMovie, {params});
}

/**
 * Validate a full-lowercase string
 * @return {Object}
 * @param {string} id
 */
export function submitReview(body) {
    return axios.post(
            urlAPI
            .urlPOST_AddReview, body);
}