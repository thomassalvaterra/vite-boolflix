<script>

export default {
    name: "findSerie",
    props: {
        serie: "",
    }

}
</script>

<template>
    <div class="card2">
        <h1>{{ serie.original_name }}</h1>
        <h5>{{ serie.original_language }}</h5>
        <img :src="`/img/${serie.original_language}.png`">
        <p>{{ serie.vote_average }}</p>
    </div>
</template>

<style scoped>
.card2 {
    width: 23%;
    margin: 0.5rem;
    padding: 30px;
    background-color: red;
}

img {
    width: 20%;
}
</style>
