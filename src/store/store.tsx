import { configureStore } from "@reduxjs/toolkit";
import stateData from "../redux/stateData";


const store = configureStore({
	reducer: {state : stateData}
});
export type AppDispatch = typeof store.dispatch
export default store;