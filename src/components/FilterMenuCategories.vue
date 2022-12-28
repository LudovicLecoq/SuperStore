<template>
    <div class="filter-menu-categories">
        <h5>Categories</h5>
            <ul>
                <li class="filter-menu-categorie" @click="setCategory(category)" :class="{ active: !currentCategoryRef }" >All products</li>
                <li class="filter-menu-categorie" 
                    v-for="(category, index) in categories" 
                    :key="index" 
                    :class="{ active: currentCategoryRef === category }" 
                    @click="setCategory(category)"
                >{{category}}</li>
            </ul>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { computed, ref, watch } from 'vue';
    export default {

        setup() {
            const store = useStore()
            const categories = computed(() => store.getters.loadCategories);
            const selectedCategory = computed(() => store.getters.selectedCategory);
            const currentCategoryRef = ref(null)

            const setCategory = (category) => {
                store.dispatch('loadSelectedProducts', category);
            }

            const setCurrentCategory = () => {
                return categories.value.find(item => item === selectedCategory.value)
            }

            watch(() => store.state.filterCategory, () => {
                currentCategoryRef.value = store.getters.loadCategorySelected;
            });

            return { categories, setCategory, setCurrentCategory, currentCategoryRef }
        },
        
  
}
</script>

<style >
    .filter-menu-categorie{
        cursor: pointer;
    }
    .filter-menu-categorie.active{
        font-weight: bold;
    }
</style>