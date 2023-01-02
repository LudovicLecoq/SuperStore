<template>
    <div class="products-modale" v-if="openModal">
        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale card">
    
            <img src="../assets/cross_icon.png" alt="cross" v-on:click="toggleModale" class="btn-modale">
        
            <div class="modale-article-title">
                <h2>{{product.title}}</h2>
            </div>
            <div class="modale-article-center-container">
                <div class="modale-article-left-container">
                    <img :src="product.image" :alt="product.title" class="modale-article-image">
                </div>
                <div class="modale-article-middle-container">
                    <p class="modale-article-middle-price">{{product.price.toFixed(2)}}€</p>
                    <product-likes v-bind:item='product.rating'/>
                    <div class="stock-container">
                        <span class="stock">En stock</span> <img src="../assets/add_icon.png" alt="" class="stock-img">
                    </div>
                </div>
                <div class="modale-article-right-container">
                    <div class="delivery">
                        <p>Delivery:</p>
                        <div class="delivery-time">
                            <p class="delivery-time-item">Normal</p>
                            <p class="delivery-time-item">delivered in 3 to 5 days</p>
                            <p class="delivery-time-item">Estimated delivery: {{getExpressDeleveryDate("normal")}}</p>
                        </div>
                        <div class="delivery-time">
                            <p class="delivery-time-item">Express</p>
                            <p class="delivery-time-item">delivered in 1 to 2 days</p>
                            <p class="delivery-time-item">Estimated delivery: {{getExpressDeleveryDate("express")}}</p>
                        </div>
                    </div>
                    <button v-on:click="addToCartFromModale(product)" class="modale-article-right-button">Add to Cart</button>
                    <router-link :to="'/cart'"><button class="modale-article-right-button gocart">Go to Cart</button></router-link>
                    <div class="marketplace">
                        <div class="marketplace-left">
                            <p class="marketplace-item">Ships from</p>
                            <p class="marketplace-item">Sold by</p>  
                        </div>
                         <div class="marketplace-right">
                            <p class="marketplace-item">SuperStore.com</p>
                            <p class="marketplace-item">SuperStore.com</p>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="modale-article-bottom-container">
                <span class="modale-article-bottom-title">About this item</span>
                <p class="modale-article-bottom-description">{{product.description}}</p>
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
                props.addToCart(product);    
            }

            const getExpressDeleveryDate = (time) => {

                const currentDate = new Date();

                if(time === "express") {
                    currentDate.setDate(currentDate.getDate() + Math.round(Math.random() * 1.5) + 1);
                } else {
                    currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 3) + 3);
                }
         
                const day = currentDate.getDate();
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();

                return `${day}/${month}/${year}`;
            }

            return { addToCartFromModale, getExpressDeleveryDate }
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
        width: 20px;
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

    .modale-article-middle-price {
        font-size: 36px;
        font-weight: bold;
    }

    .modale-article-right-container {
        border: 1.5px solid rgba(211, 211, 211, 0.9);
        width: 175px;
        height: 400px;
        padding: 0 25px;
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

    .modale-article-right-button.gocart {
        background: #fff;
        border: 1.5px solid rgb(253, 164, 62) ;
        color: rgb(253, 164, 62);
        margin-top: 20px;
    }

    .modale-article-image{
        max-width: 250px;
        max-height: 300px;
    }

    .stock-container {
        display: flex;
        align-items: center;
        margin-top: 15px;
    }

    .stock {
        color: rgb(1, 134, 1);
    }

    .stock-img {
        width: 25px;
    }

    .delivery-time {
        margin-bottom: 20px;
    }

    .delivery-time-item {
        margin: 0;
    }

    .marketplace {
        font-size: 12px;
        display: flex;
        width: 100%;
    }

    .marketplace-left, .marketplace-right {
        color: rgb(124, 124, 124);
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .marketplace-left{
        margin-right: 15px;
    }

    .marketplace-item {
       height: 25px;
        margin: 0;
    }

    .modale-article-bottom-container {
        margin-top: 15px;
        border: 1.5px solid rgb(253, 164, 62);
        border-radius: 4px;
        position: relative;
    }

    .modale-article-bottom-title{
        position: absolute;
        top: -10px;
        left: 20px;
        padding: 0 15px;
        background: #fff;
        color: rgb(253, 164, 62);
        font-weight: bold;
    }

    .modale-article-bottom-description{
        text-align: start;
        padding: 0 15px;
    }
</style>