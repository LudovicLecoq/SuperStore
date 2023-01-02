<template>
    <form @submit.prevent="loadSearch" class="search">
        <select class="search-select" @change="onChange($event)" ref="select" :value="selectRef">
            <option value="">All products</option>
            <option class="categories" v-for="(category, index) in this.allCategories" :key="index" :value="category">
                {{category}}
            </option>
        </select>
        <input type="text" class="search-input" v-model="searchTerm" placeholder="Enter your search term">
        <button class="search-button" v-on:click="loadSearch">
            <img class="search-button-icon" src="../assets/magnifying_glass.png" alt="magnifying glass" >
        </button>
    </form>
</template>

<script>

    import { mapState, useStore } from 'vuex';
    import { ref, watch } from 'vue';

    import { useRouter, useRoute} from 'vue-router';


    export default {
        name: 'searchBar',
        computed: mapState ([
            'allCategories'
        ]),
        
        setup() {

            const selectRef = ref(null)
            const store = useStore();
            const searchTerm = ref('');
            const router = useRouter();
            const route = useRoute();
           

            const onChange = (event) => {
                loadSelectedProducts(event.target.value);
            };
            
            const loadSelectedProducts = (category) => {
                store.dispatch('loadSelectedProducts', category);
            };

            const loadSearch = () => {
                store.dispatch('setFilterSearch', searchTerm); 
                if(route.path !== '/'){
                    router.push('/');
                }
                setTimeout(() => {
                     searchTerm.value = "";
                }, 100);
               
            }

            watch(() => store.state.filterCategory, () => {
                selectRef.value = store.getters.loadCategorySelected;
                searchTerm.value = "";
            });
            
            return { selectRef, onChange, loadSelectedProducts, store, searchTerm, loadSearch }
        },

        created() {
            this.store.dispatch('loadAllCategories'); 
        }, 
    
    }
</script>

<style>

    .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-select {
        border-radius: 5px 0 0 5px;
        background: #f0eeee;
        width: auto;
        margin: 0;
        padding: 0 10px;
        height: 35px;
        border: none;
    }

    .search-input {
        width: 50%;
        margin: 0;
        padding: 0 10PX;
        height: 35px;
        border: none;
    }

    .search-button {
        height: 35px;
        background: rgb(255,138,0);
        border: none;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }

    .search-button-icon {
        max-width: 20px;
        padding-right: 10px;
        cursor: pointer;
    }
</style>