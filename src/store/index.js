import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: [],
        productsInCart: [],
        totalPriceInCart: 0,
        numberItemsInCart: 0,
        allCategories: [],
        selectedCategory: null,
        selectedProducts: [],
        baseSelectedProducts: [],
        filterCategory: null,
        filterStars: null,
        filterPrice: null,
        filterSearch: null,
    }, 

    actions: {
        loadProducts({ commit }) {
            axios.get(`https://fakestoreapi.com/products`)
                .then(response => commit('loadProducts',response.data))
        },

        addToCart ({ commit }, product) {
            commit('addToCart', product);
        },

        removeOneFromCart ({ commit }, product) {
            commit('removeOneFromCart', product);
        },

        removeFromCart ({ commit }, productId) {
            commit('removeFromCart', productId);
        },

        resetCart ({commit}) {
            commit('resetCart');
            commit( 'setTotalPriceInCart');
            commit ( 'setNumberItemsInCart');
        },

        setTotalPriceInCart ({ commit }) {
            commit( 'setTotalPriceInCart');
        },

        setNumberItemsInCart ({ commit } ) {
            commit ( 'setNumberItemsInCart' )
        },

        setFilterStars ({ commit }, stars) {
            commit('setFilterStars', stars);
            commit('filterData')
        },

        setFilterPrice ({ commit }, price) {
            commit('setFilterPrice', price);
            commit('filterData')
        },

        setFilterSearch({ commit }, search) {
            commit('setFilterSearch', search);
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
            } else {
                axios.get(`https://fakestoreapi.com/products/category/${category}`)
                .then(response => commit('loadSelectedProducts',response.data));
            }
            commit('loadSelectedCategory', category);
        }
    },
    mutations: {
        loadProducts(state, products) {
            state.products = products;
        }, 

        addToCart (state, product) {
            if(state.productsInCart.includes(product)){
                product.quantity = product.quantity + 1;
            } else {
                product.quantity = 1;
                state.productsInCart.push(product);
            }
        },

        removeOneFromCart (state, product) {
                product.quantity = product.quantity - 1;
        },

        removeFromCart (state, productId) {
            let updatingCart = state.productsInCart.filter(item => item.id !== productId);
            state.productsInCart = updatingCart;
        },

        resetCart (state) {
            state.productsInCart = [];
        },

        setTotalPriceInCart (state) {
            const allTotalArticles = [0];
            state.productsInCart.forEach(object => {
                const objectTotal = object.price * object.quantity;
                allTotalArticles.push(objectTotal);
            });
            state.totalPriceInCart = Math.round(allTotalArticles.reduce((addValue, currentValue) => addValue + currentValue) * 100) / 100;
        },

        setNumberItemsInCart (state) {
            const totalItems = [];
            if(state.productsInCart.length < 1){
                state.numberItemsInCart = 0;
            } else {
                state.productsInCart.forEach(product => {    
                    totalItems.push(product.quantity);
                });
                state.numberItemsInCart = totalItems.reduce((addValue, currentValue) => addValue + currentValue);
            }
        },

        loadAllCategories(state, categories) {
            state.allCategories = categories;
        },

        setFilterStars(state, stars) {
            state.filterStars = stars;
        },

        setFilterPrice(state, price) {
            state.filterPrice = price;
        },

        setFilterSearch(state, search) {
            state.filterSearch = search;
        },

        filterData(state) {

            let updatingData = state.baseSelectedProducts

            if(state.filterPrice){
                updatingData = updatingData.filter(item => item.price >= state.filterPrice.minPrice && item.price <= state.filterPrice.maxPrice);
            }
            if (state.filterStars) {
                updatingData = updatingData.filter(item => item.rating.rate >= state.filterStars)
            } 
            if (state.filterSearch) {
                updatingData = updatingData.filter(item => item.title.toLowerCase().includes(state.filterSearch.toLowerCase()))
            }
            
            state.selectedProducts = updatingData;
        },

        loadSelectedProducts(state, data) {
            state.selectedProducts = data;
            state.baseSelectedProducts = data;
            state.filterCategory = data;
            state.filterStars = null;
        },

        loadSelectedCategory(state, category){
            if(!category) {
                state.selectedCategory = "";
            } else {
                state.selectedCategory = category;
            }
        }
    },

    getters: {

        loadProductsInCart(state){
            return state.productsInCart
        },

        loadFilteredCategory(state){
            return state.filterCategory
        },
        
        loadData(state) {
            return state.selectedProducts
        },

        loadCategories(state) {
            return state.allCategories
        },

        loadStarsFilter(state) {
            return state.filterStars
        },

        loadCategorySelected(state) {
            return state.selectedCategory
        }
    },

})
