<template>
    <div class="filter-menu-categories">
        <h5>Categories</h5>
           <ul>
            <li class="filter-menu-categorie" @click="setCategory(category)">All products</li>
            <li class="filter-menu-categorie" v-for="(category, index) in categories" :key="index" @click="setCategory(category)">{{category}}</li>
        </ul>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    export default {

        setup() {
            const store = useStore()
            const categories = computed(() => store.getters.loadCategories);

            const setCategory = (category) => {
                store.dispatch('loadSelectedProducts', category);
                console.log("action =>",category)
            };

            return { categories, setCategory }
        },
        
  
}
</script>

<style scoped>
    .filter-menu-categorie{
        cursor: pointer;
    }
</style>