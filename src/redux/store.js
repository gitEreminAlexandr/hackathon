import { configureStore } from '@reduxjs/toolkit'
import { typeModal } from './typeModal';

export const store = configureStore({
	reducer: {
		typeModal: typeModal.reducer,
	},
});
