<template>
    <div class="filter-menu-categories">
        <h5>Categories</h5>
           <ul>
            <li @click="setCategory(category)">All products</li>
            <li v-for="(category, index) in categories" :key="index" @click="setCategory(category)">{{category}}</li>
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