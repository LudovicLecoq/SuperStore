<template>
    <div class="search">
        <select class="search-select" @change="onChange($event)">
            <option value="">Toutes nos catégories</option>
            <option class="categories" v-for="(category, index) in this.allCategories" :key="index" :value="category">
                {{category}}
            </option>
        </select>
        <input type="text" class="search-input" v-model="searchTerm" placeholder="Enter your search term">
        <button class="search-button" v-on:click="loadSearch">search</button>
    </div>
</template>

<script>

   import { mapState, useStore } from 'vuex';
   import { ref } from 'vue';

    export default {
        name: 'searchBar',
        computed: mapState ([
            'allCategories'
        ]),
        
        setup() {
            const store = useStore();
            const onChange = (event) => {
                // console.log(event.target.value);
                loadSelectedProducts(event.target.value);
                console.log("terms", searchTerm)
            };
            
            const loadSelectedProducts = (category) => {
                store.dispatch('loadSelectedProducts', category);
                console.log("action =>",searchTerm)
            };

            const loadSearch = () => {
                console.log("search load",searchTerm);
                store.dispatch('setFilterSearch', searchTerm); 
            }
            
            const searchTerm = ref('');
            
            return { onChange, loadSelectedProducts, store, searchTerm, loadSearch }
        },

        created() {
            this.store.dispatch('loadAllCategories');
        }, 
    
    }
</script>

<style>

.red{
    background-color: red;
    width: 70px;
    height: 30px;
    color: white;
}

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