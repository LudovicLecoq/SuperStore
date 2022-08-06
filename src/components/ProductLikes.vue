<template>


    <div class="product-likes">
        <div class="stars-container">
            <img class="likes empty" src="../assets/five_stars_empty.png" alt="stars">
            <div class="likes fill"  :style="{width: likesWidth(item)}" />
        </div>
        <span class="rates-number">({{ item.count }} avis)</span>
    </div>
</template>

<script>
 
    export default {
        props:[
            'item'
        ],
        methods: {
            likesWidth (item) {
                const starTotal = 5;
                const starPercentage =`${(item.rate / starTotal) * 100}%`;
                return starPercentage;
            }
        }
    }
</script>

<style>
.product-likes {
    width: 225px;
    align-items: center;
    font-size: 13px;
}

.rates-number {
    margin-left: 5px;
}
.stars-container {
    width: 79px ;
    position: relative;
}

.likes {
    position: absolute;
    top: 0;
    left: 0;
 
}

.empty {
    z-index: 1;
}

.fill {
    height: 16px;
    background-image: url('../assets/five_stars_fill.png');
    z-index: 2;
}
</style>