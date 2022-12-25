<template>
         <div class="stars-container">
            <img class="likes empty" src="../../assets/five_stars_empty.png" alt="stars">
            <div class="likes fill"  :style="{width: likesWidth(item)}" />
        </div>
</template>

<script>
export default {
    props:{
        item: {
            rate: {
                type: Number,
                required: true
            },
        }
    },
    setup() {
        const likesWidth = (item) => {
            const starTotal = 5;
            const starPercentage =`${(item.rate / starTotal) * 100}%`;
            return starPercentage;
        }
        return { likesWidth }
    },

}
</script>