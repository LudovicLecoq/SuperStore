<template>
    <div class="filter-menu-price">
        <h2> {{ minPrice }} </h2>
        <h2> {{ maxPrice }} </h2>
        <div class="filter-menu-price-slider-container">

            <div class="slider">
                <div class="progress" :style="{ left: styleMin, right:styleMax }"></div>
        
            <input 
                type="range" 
                class="range-min range" 
                :min="minPrice" 
                :max="maxPrice" 
                :value="min"
                @input="rangeMin($event)"
            >
            <input 
                type="range" 
                class="range-max range" 
                :min="minPrice" 
                :max="maxPrice" 
                :value="max"
                @input="rangeMax($event)"
            >
            </div>
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
   import { computed, ref, watch, reactive } from 'vue';
export default {
    setup() {
        const store = useStore();
        const data = computed(() => store.getters.loadSelectedCategory);
        const minPrice = computed(()=>  Math.min(...data.value.map(el => el.price)));
        const maxPrice = computed(()=>  Math.max(...data.value.map(el => el.price)));
        const styleMin = ref(1);
        const styleMax = ref(1000);
        const max = ref (1000);
        const min = ref (0);
        const gap = ref (0);

        const prices = reactive({ 
            actualMax: maxPrice,
            actualMin: minPrice
        })

        const rangeMin = (event) => {
       
                if(max.value - event.target.value < gap.value ){
                    event.target.value = max.value - gap.value;
                } else {
                    min.value = Math.floor(event.target.value);
                }     
                sliderStyleMin(event.target.value);
        }

        const rangeMax = (event) => {
                if(event.target.value - min.value < gap.value ){
                    event.target.value = min.value + gap.value;
                } else {
                    max.value = Math.round(event.target.value);
                }  
                sliderStyleMax(event.target.value);
        }

        const sliderStyleMax = (value) => {
            styleMax.value = `${ 100 - (Number(value)  * 100 / maxPrice.value)}%`;
        }

        const sliderStyleMin = (value) => {
            styleMin.value = `${((Number(value) - minPrice.value ) * 100 / maxPrice.value )}%`;
            console.log(styleMin.value)
        }

        const submitPrice = () => {
            const rangePrice = {
                minPrice: min.value,
                maxPrice: max.value
            }
            store.dispatch('setFilterPrice', rangePrice);       
        }

        watch(prices, ()=> {
            console.log("watch price!!");
            max.value = maxPrice.value;
            min.value = minPrice.value;
            sliderStyleMax(max.value);
            sliderStyleMin(min.value)
        })
      
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

.filter-menu-price-slider-container {
    margin: auto;  
}

.slider {
    height: 5px;
    border-radius: 5px;    
    background: #ddd;
    margin: 5px auto 0;
    width: 175px;
    position: relative;
}

.progress{
    height: 5px;
    left: 5px;
    right: 5px;
    position: absolute;
    border-radius: 5px;
    background: #17A288;   
}

.range-input{
    position: relative;
}

.range {
    position: absolute;
    height: 5px;
    width: 100%;
    top: -1px;
    left: 0px;
    -webkit-appearance: none;
    pointer-events: none;
    background: transparent;
}

.range-min {
    left: -2px;
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