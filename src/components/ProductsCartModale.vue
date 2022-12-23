<template>
    <div v-if="isOpen" class="products-cart-modale">
        {{itemAdd.title}}
    </div>
</template>

<script>

export default {
        name: 'ProductsCartModale',
         props:[
            'isOpen',
            'itemAdd'
        ],
   
    setup() {
        
    },
}
</script>


<style scoped>
    .products-cart-modale {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
</style>