<script>
import { store } from '../store.js';
export default {
    name: 'getFilm',

    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchFilm);
            this.$emit("search");
        }
    }
}

</script>

<template>
    <div>
        <input v-model="store.searchFilm" @keyup.enter="$emit('search')" placeholder="Cerca il tuo Film" type="text">
        <button class="btn" @click="search">Cerca</button>
    </div>
</template>

<style scoped>
input {
    width: 20rem;
    height: 2rem;
    margin-right: 10px;
    font-size: 20px;
}

.btn {
    width: 5rem;
    height: 2rem;
    font-size: 20px;
}
</style>