
// FETCH API URL
const FETCH_URL = 'https://weatherapp-si2.herokuapp.com/api';

/**
 * @function getWeather
 * 
 * @param {String} params 
 * 
 * @returns {Promise}
 */
export const getWeather = (params) => {
    return fetch(`${FETCH_URL}/${params}`)
};