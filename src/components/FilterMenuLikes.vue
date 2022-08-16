<template>
    <div class="filter-menu-likes">
        Reviews
        <div class="filter-menu-likes-select"><stars-likes v-bind:item='{rate:4}' @click="SetStarsFilter(4)" />& more</div>
        <div class="filter-menu-likes-select"><stars-likes v-bind:item='{rate:3}' @click="SetStarsFilter(3)" />& more</div>
        <div class="filter-menu-likes-select"><stars-likes v-bind:item='{rate:2}' @click="SetStarsFilter(2)" />& more</div>
        <div class="filter-menu-likes-select"><stars-likes v-bind:item='{rate:1}' @click="SetStarsFilter(1)" />& more</div>
    </div>
</template>

<script>
    import starsLikes from './atoms/starsLikes.vue';
    import { useStore } from 'vuex';
    export default {

        components: {starsLikes},
        setup() {
            const store = useStore();
            const  SetStarsFilter = (value) => {
                store.dispatch('setFilterStars', value);
            }
           return { SetStarsFilter }
        },
    }
</script>