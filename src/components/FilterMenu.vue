<template>
    <div class="filter-menu-container" >
        <filter-menu-categories />
        <filter-menu-likes />
    </div>
</template>

<script>

import FilterMenuCategories from '../components/FilterMenuCategories.vue';
import FilterMenuLikes from '../components/FilterMenuLikes.vue';

export default {
    components: { FilterMenuCategories, FilterMenuLikes },

    setup() {
        
    },
}
</script>

<style>
    .filter-menu-container {
        width: 30%;
        min-width: 250px;
    }
</style>