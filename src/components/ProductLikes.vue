<template>
    <div class="product-likes">
        <stars-likes v-bind:item='item'/>
        <span class="rates-number">({{ item.count }})</span>
    </div>
</template>

<script>
    import starsLikes from '../components/atoms/starsLikes.vue';

    export default {
        components: { starsLikes },
        props:[
            'item'
        ],
  
    }
</script>

<style>
    .product-likes {
        width: 120px;
        align-items: center;
        font-size: 13px;
        z-index: 2;
        margin: auto;
        margin-top: 20px;
    }

.rates-number {
    margin-left: 85px;
}
.stars-container {
    width: 80px ;
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