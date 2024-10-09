import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductIntoCart: (state, action) => {
            const productExist = state.products.find(item => item.product_id === action.payload.id);
            if (productExist) {
                productExist.quantity++;
            } else {
                state.products.push({

                    quantity: 1,
                    product_id: action.payload.id,
                    product: action.payload

                });

            }
        },
        decreaseProductIntoCart: (state, action) => {
            const productExist = state.products.find(item => item.product_id === action.payload.id);
            if (productExist) {

                if (productExist.quantity > 1) {

                    productExist.quantity--;
                } else {
                    state.products = state.products.filter(item => item.product_id !== action.payload.id)
                }

            }
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(item => item.product_id !== action.payload.id)

        },
        removeAllProduct: (state, action) => {
            state.products = [];
        }

    }
})


export const {addProductIntoCart, decreaseProductIntoCart, removeProductFromCart, removeAllProduct} = cartSlice.actions

export default cartSlice.reducer;