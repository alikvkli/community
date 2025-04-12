import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"


const initialState: InitialStateProps = {
    login: false,
    isCustomer: true,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<InitialStateProps['login']>) => {
            state.login = action.payload;
        },
        setCustomer: (state, action: PayloadAction<InitialStateProps['isCustomer']>) => {
            state.isCustomer = action.payload;
        },
    }
})
    ;

export const {
    setLogin,
    setCustomer
} = appSlice.actions;

export default appSlice.reducer;