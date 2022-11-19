import { createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "../../constant";

const initialState = {
    type: LOGIN,
    openModal: false,
}

export const typeModal = createSlice({
    name: 'typeModal',
    initialState,
    reducers: {
        SET_TYPE_MODAL: (state, action) => {
            state.type = action.payload;
            state.openModal = true;
        },
        CLOSE_MODAL : (state) => {
            state.openModal = false;
        }
    }
}
)

export const {SET_TYPE_MODAL, CLOSE_MODAL} = typeModal.actions;