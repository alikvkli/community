import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"


const initialState: InitialStateProps = {
    login: true,
    isCustomer: true,
    isScheduleRequest: false,
    customerNotification: false,
    providerNotification: false,
    acceptAppointment: false,
    isCheckout: false,
    checkPayment: false,
    searchText: "",
    isProviderModal: false,
    isCustomerModal: false,
    isProviderProfileDone: false,
    profileIsFavorite: false,
    systemNotification: false
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
        },
        setSearchText: (state, action: PayloadAction<InitialStateProps['searchText']>) => {
            state.searchText = action.payload;
        },
        setCustomerModal: (state, action: PayloadAction<InitialStateProps['isCustomerModal']>) => {
            state.isCustomerModal = action.payload;
        },
        setProviderModal: (state, action: PayloadAction<InitialStateProps['isProviderModal']>) => {
            state.isProviderModal = action.payload;
        },
        setProviderProfileDone: (state, action: PayloadAction<InitialStateProps['isProviderProfileDone']>) => {
            state.isProviderProfileDone = action.payload;
        },
        setProfileIsFavorite: (state, action: PayloadAction<InitialStateProps['profileIsFavorite']>) => {
            state.profileIsFavorite = action.payload;
        },
        setSystemNotification: (state, action: PayloadAction<InitialStateProps['systemNotification']>) => {
            state.systemNotification = action.payload;
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
    setCheckPayment,
    setSearchText,
    setCustomerModal,
    setProviderModal,
    setProviderProfileDone,
    setProfileIsFavorite,
    setSystemNotification
} = appSlice.actions;

export default appSlice.reducer;