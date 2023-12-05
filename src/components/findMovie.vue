<script>

export default {
    name: "findMovie",
    props: {
        film: "",
    }
}
</script>

<template>
    <div class="card">
        <h1>{{ film.title }}</h1>
        <h5>{{ film.original_language }}</h5>
        <img :src="`/img/${film.original_language}.png`">
        <h3>{{ film.original_title }}</h3>
        <p>{{ film.vote_average }}</p>
    </div>
</template>

<style scoped>
.card {
    width: 23%;
    padding: 30px;
    margin: 0.5rem;
    background-color: blue;
}

img {
    width: 20%;
}
</style>
