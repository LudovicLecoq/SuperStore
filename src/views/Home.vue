<template>
    <div class="home">
       <Products v-bind:items='thing' />
    </div>
</template>

<script>

    import { mapState, useStore } from 'vuex';
    import {computed} from 'vue';
    import Products from '../components/Products.vue';
    export default {
        components: { Products },
            computed: mapState ([
                    'products'
                ]),
        setup() {
            const store = useStore()
            const thing = computed(() => store.getters.loadData);
        
            return { thing }
        }
    }
</script>

<style lang="scss">

  


</style>
