<template>
    <div class="filter-menu-container" >
        <filter-menu-categories />
        <filter-menu-likes />
        <filter-menu-range />
    </div>
</template>

<script>

import FilterMenuCategories from './FilterMenuCategories.vue';
import FilterMenuLikes from './FilterMenuLikes.vue';
import FilterMenuRange from './FilterMenuRange.vue';

export default {
    components: { FilterMenuCategories, FilterMenuLikes, FilterMenuRange },

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