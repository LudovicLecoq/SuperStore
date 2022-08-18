import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: [],
        productsInCart: [],
        allCategories: [],
        selectedProducts: [],
        baseSelectedProducts: [],
        filterCategory: null,
        filterStars: null,
        filterPrice: null,
    }, 

    actions: {
        loadProducts({ commit }) {
            axios.get(`https://fakestoreapi.com/products`)
                .then(response => commit('loadProducts',response.data))
        },

        addToCart ({ commit }, product) {
            commit('addToCart', product);
        },

        removeFromCart ({ commit }, productId) {
            commit('removeFromCart', productId);
        },

        setFilterStars ({ commit }, stars) {
            commit('setFilterStars', stars);
            commit('filterData')
        },

        setFilterPrice ({ commit }, price) {
            commit('setFilterPrice', price);
            commit('filterData')
        },

        filterData ({ commit }) {
            commit('filterData');
        },

        loadAllCategories( {commit} ){
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(response => commit('loadAllCategories',response.data));
            
        },
        loadSelectedProducts({ commit }, category) {
            if(!category){
                axios.get(`https://fakestoreapi.com/products`)
                .then(response => commit('loadSelectedProducts',response.data));
                console.log('IF loadSelectedPro')
            } else {
                axios.get(`https://fakestoreapi.com/products/category/${category}`)
                .then(response => commit('loadSelectedProducts',response.data));
                console.log("loadSelectedProd");
            }
            console.log(category)
        }
    },
    mutations: {
        loadProducts(state, products) {
            state.products = products;
        }, 

        addToCart (state, product) {
            state.productsInCart.push(product);
        },

        removeFromCart (state, productId) {
            let updatingCart = state.productsInCart.filter(item => item.id !== productId);
            state.productsInCart = updatingCart;
        },

        loadAllCategories(state, categories) {
            state.allCategories = categories;
            console.log(categories);
        },

        setFilterStars(state, stars) {
            state.filterStars = stars;
            console.log(stars);
        },

        setFilterPrice(state, price) {
            state.filterPrice = price;
            console.log(price);
        },

        filterData(state) {

            console.log("stars=>");

            if(state.filterPrice){
                console.log("filterprice",state.filterPrice)
                let updatingData = state.baseSelectedProducts.filter(item => item.price > state.filterPrice.minPrice && item.price < state.filterPrice.maxPrice);
                state.selectedProducts = updatingData;
            } else if (state.filterStars){
                console.log('filterData > stars')
                let updatingData = state.baseSelectedProducts.filter(item => item.rating.rate >= state.filterStars);
                state.selectedProducts = updatingData;
            }
        console.log(state.selectedProducts)
        },

        loadSelectedProducts(state, data) {
            state.selectedProducts = data;
            state.baseSelectedProducts = data;
            state.filterCategory = data;
            state.filterStars = null;
            console.log(data, "stars+>", state.filterStars);
        },
    },

    getters: {
        loadData(state) {
            return state.selectedProducts
        },

        loadCategories(state) {
            return state.allCategories
        },

        loadStarsFilter(state) {
            return state.filterStars
        }
    },

   
    modules: {
    }
})
