import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import { logoutUser, setPage, setSelectedItem, loginUserAsync, registerUserAsync } from "./store/slices/user/userSlice"
import {addItemToCategory, modifyItemInCategory, deleteItemFromCategory, addCategoryItemAsync, getAllCategoryItemsAsync, modifyCategoryItemAsync, deleteCategoryItemAsync } from "./store/slices/category/categorySlice"
import {addItemToTodoItems, modifyItemInTodoItems, deleteItemFromTodoItems, addTodoItemAsync, deleteTodoItemAsync, modifyTodoItemAsync, getAllTodoItemsAsync } from "./store/slices/todo/todoSlice"

import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
