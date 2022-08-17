<template>
    <div class="filter-menu-likes">
        Reviews
        <div class="filter-menu-likes-select" :class="{ active: activeOption === 4 }" @click="SetStarsFilter(4)"><stars-likes v-bind:item='{rate:4}' />& more</div>
        <div class="filter-menu-likes-select" :class="{ active: activeOption === 3 }" @click="SetStarsFilter(3)"><stars-likes v-bind:item='{rate:3}' />& more</div>
        <div class="filter-menu-likes-select" :class="{ active: activeOption === 2 }" @click="SetStarsFilter(2)"><stars-likes v-bind:item='{rate:2}' />& more</div>
        <div class="filter-menu-likes-select" :class="{ active: activeOption === 1 }" @click="SetStarsFilter(1)"><stars-likes v-bind:item='{rate:1}' />& more</div>
    </div>
</template>

<script>
    import starsLikes from './atoms/starsLikes.vue';
    import { useStore } from 'vuex';
    import { ref, computed, watch} from 'vue';

    export default {
        components: { starsLikes },
        setup() {
            const store = useStore();
            const activeOption = ref(null);
            const stars = computed(() => store.getters.loadStarsFilter);
            
            const  SetStarsFilter = (value) => {
                store.dispatch('setFilterStars', value);
                activeOption.value = stars.value;
            }

            watch(stars, function () {
                if (stars.value === null ){
                    activeOption.value = null;
                }
            })

           return { SetStarsFilter, activeOption }
        },
    }
</script>


<style scoped>
    .active {
        font-weight: bold;
    }
</style>