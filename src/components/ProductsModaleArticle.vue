<template>
    <div class="products-modale" v-if="openModal">
        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale card">
            <div v-on:click="toggleModale" class="btn-modale">X</div>
            <div class="modale-article-title">
                <h2>{{product.title}}</h2>
            </div>
            <div class="modale-article-center-container">
                <div class="modale-article-left-container">
                    <img :src="product.image" :alt="product.title" class="modale-article-image">
                </div>
                <div class="modale-article-middle-container">
                    <p class="modale-article-middle-price">{{product.price}}€</p>
                    <product-likes v-bind:item='product.rating'/>
                    <p>en stock</p>
                </div>
                <div class="modale-article-right-container">
                    <p>en stock</p>
                    <button v-on:click="addToCartFromModale(product)" class="modale-article-right-button">Add to Cart</button>
                </div>
            </div>
            <div class="modale-article-bottom-container">
                 <p>{{product.description}}</p>
            </div>
        
        </div>
    </div>
</template>

<script>
        import ProductLikes from './ProductLikes.vue';

    export default {
        name: "Modale",
        components: { ProductLikes },
        props: ["openModal", "toggleModale", "product", "addToCart"],
        setup(props) {
            const addToCartFromModale = (product) => {
                props.toggleModale();
                props.addToCart(product)    
            }

            return { addToCartFromModale }
        }
    };
</script>

<style scoped>

    .product-likes {
        margin: 0;
    }
    .products-modale {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .overlay {
        background: rgba(25, 25, 25, 0.7);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modale {
        color: #333;
        padding: 35px 75px;
        position: fixed;
        height: 590px;
        top: 15%;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 850px;
    }

    .btn-modale {
        position: absolute;
        top: 30px;
        right: 35px;
        cursor: pointer;
    }

    .modale-article-center-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 450px;
    }

    .modale-article-left-container {
        
    }

    .modale-article-middle-container {
        width:250px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 400px;
    }

    .modale-article-middle-price{
        font-size: 36px;
        font-weight: bold;
    }

    .modale-article-right-container {
        border: 1.5px solid rgba(211, 211, 211, 0.9);
        width: 150px;
        height: 400px;
        padding: 0 35px;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
        background: #f8f8f8;
    }

    .modale-article-right-button {
        background: rgb(253, 164, 62);
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 100px;
        height: 30px;
    }

    .modale-article-image{
        max-width: 250px;
        max-height: 300px;
    }
</style>