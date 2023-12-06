<script>

export default {
    name: "findSerie",
    props: {
        serie: Object,
    },
    data() {
        return {
            voteInt: (Math.ceil(this.serie.vote_average) / 2)
        }
    }

}
</script>

<template>
    <div class="cardWrapper">
        <div class="cardPoster">
            <img :src="`https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`" class="nik" alt="">
        </div>
        <div class="cardInfo">
            <h1 class="text-center">{{ serie.original_name }}</h1>
            <p class="text-center">{{ serie.overview }}</p>
            <div class="flagInfo">
                <img class="flag" :src="`/img/${serie.original_language}.png`">
            </div>
            <div class="card-star">
                <i v-for="i in 5" :class="{ 'filled': i <= voteInt }" class="fas fa-star"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nik {
    height: 513px;
}

.cardWrapper {
    position: relative;
}

.cardPoster {
    margin: 0 20px;
}

.cardInfo {
    height: 513px;
    display: none;
    position: absolute;
    top: 0px;
    margin: 0 20px;
    background-color: black;
    border: 1px solid black;
    opacity: 0.6;
    overflow: auto;
}

.cardWrapper:hover .cardInfo {
    display: block;

}

.text-center {
    text-align: center;
    margin: 15px 0;
    font-weight: bold;
    color: white;
}

.flagInfo {
    display: flex;
    justify-content: center;
}

.flag {
    width: 50px;
    height: 30px;
}

.card-star {
    display: flex;
    justify-content: center;
    margin: 20px;
}
</style>
