<template>
    <div class="filter-menu-categories">
        <p class="filter-menu-title">Categories</p>
            <ul class="filter-menu-categories-list">
                <li class="filter-menu-categories-item" @click="setCategory(category)" :class="{ active: !currentCategoryRef }" >All products</li>
                <li class="filter-menu-categories-item" 
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

    .filter-menu-title {
        margin-top: 30px;
        text-align: start;
        font-weight: bold;
    }

    .filter-menu-categories-list {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
        padding-left: 10px;
        margin-bottom: 50px;
    }

    .filter-menu-categories-item {
        cursor: pointer;
    }

    .filter-menu-categories-item.active {
        font-weight: bold;
    }
</style>