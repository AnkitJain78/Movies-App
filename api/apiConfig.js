const { Axios } = require("axios");
const { BASE_URL } = require("../constants/constants");
const MovieApi = new Axios({
  baseURL: BASE_URL,
  headers: {
    'accept': 'application/json'
  }
});

module.exports = {
  MovieApi
};