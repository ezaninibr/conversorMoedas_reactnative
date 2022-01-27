import axios from "axios";

// baseURL: https://free.currconv.com/api/v7
// queryString: convert?q=USD_BRL&compact=ultra&apiKey=809dc917654d1818d14d

const api = axios.create({
    baseURL:"https://free.currconv.com/api/v7"
});

export default api;