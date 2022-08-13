<template>
    <div class="home">
       <Products v-bind:items='thing' />
    </div>
</template>

<script>

    import { mapState, useStore } from 'vuex';
    import {computed, watch, isRef, isReactive, reactive, toRefs, onUpdated} from 'vue';
    import Products from '../components/Products.vue';
    export default {
        components: { Products },
            computed: mapState ([
                    'products'
                ]),
        setup() {
            const store = useStore()
                const thing = computed(() => store.getters.loadData);
                const arrayProd = reactive({
                    value: computed(() => store.getters.loadData)
                }) 
                const ArrayProdRef = toRefs(arrayProd)
            // const myItems = mapState(['products'])
            console.log('setup=>',isRef(thing), ArrayProdRef.value, isReactive(thing) );

            watch(ArrayProdRef.value, function(newValues, oldValues){
            console.log("watch", newValues, oldValues);
        });
        onUpdated(() => {
            console.log("update")
        })

            return {thing, store, arrayProd, ArrayProdRef}
           
        }
    }
</script>

<style lang="scss">

  


</style>
