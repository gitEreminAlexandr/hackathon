import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { typeModal } from './typeModal';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		typeModal: typeModal.reducer,
	},
});
