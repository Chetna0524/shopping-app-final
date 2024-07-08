import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: {},
	loggedIn: false,
	auth: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loggedIn: (state, action) => {
			console.log("login reducer", action.payload);
			return {
				...state,
				currentUser: action.payload,
				loggedIn: true,
				auth: true,
			};
		},
		logout: (state, action) => {
			return initialState;
		},
	},
});

export const { loggedIn, logout } = authSlice.actions;

export default authSlice.reducer;
