<template>
    <div class="search">
        <select class="search-select">
            <option value="">Toutes nos catégories</option>
            <option class="categories"
            v-for="(category, index) in this.allCategories" :key="index" :value="category">{{category}}</option>
        </select>
        <input type="text" class="search-input">
        <button class="search-button">search</button>
    </div>
</template>

<script>

   import { mapState } from 'vuex';

    export default {
        name: 'searchBar',
        computed: mapState ([
            'allCategories'
        ]),
        setup() {

        }
    
    }
</script>

<style>

.search {
    width: 100%;
}

.search-select {
    border-radius: 5px 0 0 5px;
    background: #f0eeee;
    width: auto;
    margin: 0;
    padding: 0;
    height: 35px;
    border: none;
}

.search-input {
    width: 50%;
    margin: 0;
    padding: 0;
    height: 35px;
    border: none;
}

.search-button {
    height: 35px;
    background: rgb(255,138,0);
    border: none;
    border-radius: 0 5px 5px 0;
}

</style>