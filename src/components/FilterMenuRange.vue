<template>
    <div class="filter-menu-price">
        <!-- <h2> {{ minPrice }} </h2>
        <h2> {{ maxPrice }} </h2> -->
        <p class="filter-menu-title">Price</p>
        <div class="filter-menu-price-slider-container">
            <div class="filter-menu-price-slider-container-range">
                <span> {{ min }} </span>
                <span> {{ max }} </span>
            </div>
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
            <button class="filter-menu-price-slider-container-range-button" @click="submitPrice">GO</button>
        </div>

      
        
        
    </div>
</template>

<script>
   import { useStore } from 'vuex';
   import { computed, ref, watch, reactive } from 'vue';
export default {
    setup() {
        const store = useStore();
        const data = computed(() => store.getters.loadFilteredCategory);
        const minPrice = computed(()=> data.value && Math.min(...data.value.map(el => el.price)));
        const maxPrice = computed(()=> data.value && Math.max(...data.value.map(el => el.price)));
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
        }

        const submitPrice = () => {
            const rangePrice = {
                minPrice: min.value ,
                maxPrice: max.value+0.01 
            }
            store.dispatch('setFilterPrice', rangePrice);       
        }

        watch(prices, ()=> {
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

    .filter-menu-price-slider-container-range {
        display: flex;
        justify-content: space-between;
        margin-left: 12.7px;
        margin-bottom: 10px;

    }

    .filter-menu-price {
        width: 200PX;
        height: 200px;
        position: relative;
    }

    .filter-menu-price-slider-container {
        padding-right: 40px;
    }

    .slider {
        height: 5px;
        border-radius: 5px;    
        background: #ddd;
        margin: 5px auto 0;
        width: 140px;
        position: relative;
    }

    .progress{
        height: 4px;
        left: 5px;
        right: 5px;
        position: absolute;
        border-radius: 5px;
        background: rgb(48, 64, 85);   
    }

    .range-input{
        position: relative;
    }

    .range {
        position: absolute;
        height: 4px;
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
        height: 14px;
        width: 14px;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
        -webkit-appearance: none;
        background: rgb(48, 64, 85);
    }

    input[type="range"]::-moz-range-thumb {
        height: 14px;
        width: 14px;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
        -moz-appearance: none;
        background: rgb(48, 64, 85);
    }

    .filter-menu-price-slider-container-range-button {
        margin-top: 10px;
        background: #fff;
        color: rgb(48, 64, 85);
        border: 1.5px solid rgb(48, 64, 85);
        border-radius: 4px;
        padding: 3px 10px;
    }

</style>