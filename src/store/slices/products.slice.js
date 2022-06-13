import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
	name: 'products',
    initialState: [],
    reducers: {
        setProducts: ( state, action) => {
            return action.payload
        }
    }
})

export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then( res => dispatch(setProducts(res.data.data.products)))
        .finally( () => dispatch(setIsLoading(false)));
}

export const filterByProductName = (searchTerm) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${searchTerm}`)
        .then( res => dispatch(setProducts(res.data.data.products)))
        .finally( () => dispatch(setIsLoading(false)));
}

export const filterByCategory = (categoryID) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryID}`)
        .then( res => dispatch(setProducts(res.data.data.products)))
        .finally( () => dispatch(setIsLoading(false)));
}



export default productsSlice.reducer;