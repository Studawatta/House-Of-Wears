import { createSlice } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: 4,
  },
  reducers: {
    nextSlide(state, action) {
      console.log;
    },
    prevSlide() {},
    dotSlide() {},
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
