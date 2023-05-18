import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem('filterData')) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem('oneProduct')) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        console.log('filter', filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem('filterData', saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem('oneProduct', saveState);
        console.log('oneProduct', oneProduct);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;
