/**
 * Created by Avell on 13.03.2019.
 */

import {GET_USERS,REQUEST_USERS,GET_PAGE} from '../actions';
import { combineReducers } from "redux";

const userReducer = (state ={
    users:[]
},action) =>{
    switch (action.type){
        case REQUEST_USERS:
            return{
                ...state,
                users:action.users
            }
        case GET_USERS:
            return {
                ...state,
                users:action.users
            }
        default:
            return state
    }
}
const pagesReducer = (state={ data:{
    currentPage:null,
    totalPages:null,
    pageLimit:null
}}, action) =>{
    switch (action.type){
        case GET_PAGE:
            return{
                ...state,
               data:action.data
            }
        default:
            return state
    }
};

export default combineReducers({
    userReducer,pagesReducer
});