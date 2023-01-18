import { useSelector } from "react-redux";
import React from "react"
import {WishlistItem} from "./WishlistItem.js"
import './Wishlist.css';


export const Wishlist = () => {
    const wishlists = useSelector((state) =>  state.wishlist);
    //console.log("wishlist", wishlists.wishlists[0].title)
    
    return (
        <div className = "Wishlist-Container">
            <h3>My reading list ({wishlists.wishlists.length})</h3>
            { wishlists.wishlists.map((list) => {
                return (
                    <WishlistItem key = {list.id} wishlist = {list} />
                )
            })}

        </div>
    )
}

