import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import categoryReducer from "./slices/category/categorySlice";
import todoReducer from "./slices/todo/todoSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		category: categoryReducer,
        todo: todoReducer
	},
});
