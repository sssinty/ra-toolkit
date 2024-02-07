import { configureStore } from "@reduxjs/toolkit";
import stateData from "../redux/stateData";


const store = configureStore({
	reducer: {state : stateData}
});

export default store;