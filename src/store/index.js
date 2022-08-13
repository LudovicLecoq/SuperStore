import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: [],
        productsInCart: [],
        allCategories: [],
        selectedProducts: []
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

        loadSelectedProducts(state, category) {
            state.selectedProducts = category;
            console.log(category);
        },
    },
    getters: {
        loadData(state) {
            return state.selectedProducts
        }
    },
   
    modules: {
    }
})
