import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"


const initialState: InitialStateProps = {
    login: false,
    isCustomer: true,
    isScheduleRequest: false,
    customerNotification: false,
    providerNotification: false,
    acceptAppointment: false,
    isCheckout: false,
    checkPayment : false
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
        setIsScheduleRequest: (state, action: PayloadAction<InitialStateProps['isScheduleRequest']>) => {
            console.log("here")
            state.customerNotification = true;
            state.providerNotification = true;
            state.isScheduleRequest = action.payload;
        },
        setCustomerNotification: (state, action: PayloadAction<InitialStateProps['customerNotification']>) => {
            state.customerNotification = action.payload;
        },
        setProviderNotification: (state, action: PayloadAction<InitialStateProps['providerNotification']>) => {
            state.providerNotification = action.payload;
        },
        setAcceptAppointment: (state, action: PayloadAction<InitialStateProps['acceptAppointment']>) => {
            state.acceptAppointment = action.payload;
        },
        setIsCheckOut: (state, action: PayloadAction<InitialStateProps['isCheckout']>) => {
            state.isCheckout = action.payload;
        },
        setCheckPayment: (state, action: PayloadAction<InitialStateProps['checkPayment']>) => {
            state.checkPayment = action.payload;
        }
    }
});

export const {
    setLogin,
    setCustomer,
    setIsScheduleRequest,
    setCustomerNotification,
    setProviderNotification,
    setAcceptAppointment,
    setIsCheckOut,
    setCheckPayment
} = appSlice.actions;

export default appSlice.reducer;