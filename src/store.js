import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiUrl2: 'https://api.themoviedb.org/3/search/tv',
    // apiUrlImage: 'https://image.tmdb.org/t/p/w342/',
    apiKey: 'f0a36eb2bd0f04101a28502b7ed368c6',
    films: [],
    series: [],
    searchFilm: "",
});