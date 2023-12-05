<script>
import findMovie from './components/findMovie.vue';
import findSerie from './components/findSerie.vue';
import getFilm from './components/getFilm.vue';

import { store } from './store.js';
import axios from 'axios'; //importo Axios

export default {
    components: {
        findMovie,
        getFilm,
        findSerie
    },

    data() {
        return {
            store
        }
    },

    mounted() {
        this.getMovies();
    },

    methods: {
        getMovies() {
            const optionsMovies = {
                method: 'GET',
                url: this.store.apiUrl,
                params: {
                    include_adult: 'false',
                    language: 'it-IT',
                    page: '1',
                    query: encodeURI(this.store.searchFilm),
                    api_key: this.store.apiKey
                },
                headers: {
                    accept: 'application/json',
                    // Authorization: 'Bearer f0a36eb2bd0f04101a28502b7ed368c6'
                }
            };

            axios.request(optionsMovies).then(risultato => {
                this.store.films = risultato.data.results;
                console.log("Risultato1", risultato.data);
                this.store.searchFilm = "";
                console.log("Risultato ricerca per film: ", risultato.data);
            }).catch(error => {
                this.store.films = [];
                console.error("Errore");
            });

            const optionsSeries = {
                method: 'GET',
                url: this.store.apiUrl2,
                params: {
                    include_adult: 'false',
                    language: 'it-IT',
                    page: '1',
                    query: encodeURI(this.store.searchSerie),
                    api_key: this.store.apiKey
                },
                headers: {
                    accept: 'application/json',
                    // Authorization: 'Bearer f0a36eb2bd0f04101a28502b7ed368c6'
                }
            };

            axios.request(optionsSeries).then(risultato => {
                this.store.series = risultato.data.results;
                console.log("Risultato2", risultato.data);
                this.store.searchSeries = "";
                console.log("Risultato ricerca per serie: ", risultato.data);
            }).catch(error => {
                this.store.series = [];
                console.error("Errore");
            });

        },




    }

}



</script>

<template>
    <header>
        <h1>This is Boolflix</h1>
        <getFilm @search="getMovies" />
    </header>
    <main>
        <section class="container">
            <findMovie v-for="movie in store.films" :film="movie" />
        </section>
        <section class="container">
            <findSerie v-for="series in store.series" :serie="series" />
        </section>
    </main>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: black;
    color: red;
    font-size: 20px;
    padding: 4rem;
}

.container {
    width: 80%;
    height: 40vh;
    margin: 2rem auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: auto;
    flex-shrink: 0;
}
</style>
