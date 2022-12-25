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
                console.log('IF loadSelectedPro');
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
            console.log("load all categories", categories);
        },

        setFilterStars(state, stars) {
            state.filterStars = stars;
            console.log("stars filter", stars);
        },

        setFilterPrice(state, price) {
            state.filterPrice = price;
            console.log("price filter",price);
        },

        setFilterSearch(state, search) {
            state.filterSearch = search;
            console.log("filter search",search);
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
    
            console.log("filter data", state.selectedProducts)
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

        loadProductsInCart(state){
            return state.productsInCart
        },

        loadSelectedCategory(state){
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
        }
    },

   
    modules: {
    }
})
