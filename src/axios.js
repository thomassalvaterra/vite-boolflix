import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
        query: 'shrek', //encodeURI(this.store.quelDato)
        include_adult: 'false',
        language: 'it-IT',
        page: '1'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer f0a36eb2bd0f04101a28502b7ed368c6'
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });