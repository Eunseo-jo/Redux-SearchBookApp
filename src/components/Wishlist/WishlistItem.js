import { useDispatch } from "react-redux";
import { remove_list } from "../../modules/wishlist";
import React from "react"
import './Wishlist.css';

export const WishlistItem = ({wishlist}) => {
    
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(remove_list(wishlist.id))
    }
    return (
        <ul className = "WishlistItem">
            <li>{wishlist.title}
            <button onClick= {remove}> remove </button>
            </li>
        </ul>
    )
}

