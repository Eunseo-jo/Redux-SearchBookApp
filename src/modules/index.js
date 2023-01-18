import {combineReducers} from 'redux'
import book from './book'
import wishlist from './wishlist';

const rootReducer = combineReducers ({
    book,
    wishlist,
})

export default rootReducer;
