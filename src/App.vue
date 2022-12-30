<template>
    <div class="app-container">
        <Header />
        <section class="content">
            <router-view />
        </section>
        <Footer /> 
    </div>

</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import { useStore } from 'vuex';

    export default {
        components: { Footer, Header },
        beforeCreate() {
            this.$store.dispatch('loadSelectedProducts');
            this.$store.dispatch('loadAllCategories')
        }, 
        setup() {
          
            const store = useStore();

            store.subscribeAction({
                after: (action) => {
                    if (action.type === 'addToCart' || action.type === 'removeFromCart' || action.type === 'removeOneFromCart' ) {
                        store.dispatch('setTotalPriceInCart');
                        store.dispatch('setNumberItemsInCart');
                    }
                }
            })
        },
    }
  
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');

body {
    margin: 0;
    background: #f8f8f8;
}

#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(18, 25, 33);
    overflow: hidden;
    // max-width: 1280px;
    margin: 0 auto 0;
    display: flex;
    flex-direction: column;
    }

    .app-container {
        left: 0;
        overflow: hidden;
    }

    .content {
            max-width: 1280px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            min-height: 80vh;  
    }
</style>
