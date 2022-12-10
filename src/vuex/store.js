import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        products: [],
        cart: []
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                // eslint-disable-next-line no-unused-vars
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.article === product.article) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    const newObj = {...product, quantity: 1};
                    state.cart.push(newObj)
                }
            } else {
                const newObj = {...product, quantity: 1};
                state.cart.push(newObj)
            }

            // SET_CART:(state,product)=>{
            //   state.cart.push(product,{quantity:1})

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        },
        DELETE_ALL_CART: (state) => {
            if (state.cart.length >= 1) {
                state.cart = [];
            }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products;
                })
                .catch((err) => {
                    console.log(err)
                    return err;
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        DELETE_ALL_FROM_CART({commit}) {
            commit('DELETE_ALL_CART')
        }
    },
    modules: {}
})
