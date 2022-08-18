<template>
    <div class="filter-menu-price">
        <h2> {{ minPrice }} </h2>
        <h2> {{ maxPrice }} </h2>
        <div class="filter-menu-price-slider-container">
            <div class="progress" :style="{ left: styleMin, right:styleMax }"></div>
     
            <input 
                type="range" 
                class="range-min range" 
                :min="0" 
                :max="1000" 
                :value="min"
                @input="rangeMin($event)"
            >
            <input 
                type="range" 
                class="range-max range" 
                :min="2" 
                :max="1000" 
                :value="max"
                
                @input="rangeMax($event)"
            >
        </div>
        <div class="hop">
            <h4> {{ min }} </h4>
            <h4> {{ max }} </h4>
        </div>
        <button @click="submitPrice">GO</button>
    </div>
</template>

<script>
   import { useStore } from 'vuex';
   import { computed, ref } from 'vue';
export default {
    setup() {
        const store = useStore();
        const data = computed(() => store.getters.loadData);
        const minPrice = computed(()=>  Math.min(...data.value.map(el => el.price)));
        const maxPrice = computed(()=>  Math.max(...data.value.map(el => el.price)));
        const styleMin = ref(10);
        const styleMax = ref(1000);
        const max = ref (null);
        const min = ref (null);
        const gap = ref (0);

        setTimeout(() => {
            max.value = maxPrice.value
            min.value = minPrice.value
        }, 300);
        
        const rangeMin = (event) => {
       
                if(max.value - event.target.value < gap.value ){
                    event.target.value = max.value - gap.value;
                } else {
                    min.value = Math.floor(event.target.value);
                }     
                styleMin.value = `${2+(Number(event.target.value)  * 100 / 1000)}%`;
                console.log(styleMin.value)
        }

        const rangeMax = (event) => {
        
                if(event.target.value - min.value < gap.value ){
                    event.target.value = min.value + gap.value;
                } else {
                    max.value =Math.round(event.target.value);
                }  
                styleMax.value = `${ 100 - (Number(event.target.value)  * 100 / 1000)}%`;
                console.log(styleMax.value)
        }

        const submitPrice = () => {
            const rangePrice = {
                minPrice: min.value,
                maxPrice: max.value
            }
            store.dispatch('setFilterPrice', rangePrice);       
        }


      
        return { minPrice, maxPrice, rangeMax, rangeMin, min ,max, submitPrice, styleMin, styleMax }
    },

}
</script>

<style scoped>

.filter-menu-price {
    width: 250PX;
    height: 200px;
    position: relative;
}
.slider {
    height: 5px;
    border-radius: 5px;
    background: #ddd;
}

.progress{
    height: 5px;
    left: 2%;
    right: 0;
    position: absolute;
    border-radius: 5px;
    background: #17A288;
    /* transform: rotateY(180deg) ;    */
    
}

.range-input{
    position: relative;
}

.range {
    position: absolute;
    height: 5px;
    width: 100%;
    left: 0;
    -webkit-appearance: none;
    pointer-events: none;
    background: transparent;
}

input[type="range"]::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    -webkit-appearance: none;
    background: #17A288;
}

input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    -moz-appearance: none;
    background: #17A288;
}

</style>