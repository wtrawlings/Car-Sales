//import React from "react";
import { combineReducers } from "redux";
import { carReducer } from "./carReducer";


//make a const for the action types
//import those consts into reducer

export default combineReducers ({
    car: carReducer
});
