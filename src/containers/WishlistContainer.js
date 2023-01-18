import {connect, useSelector } from 'react-redux'
import { Wishlist } from '../components/Wishlist/Wishlist'
import { remove_list } from '../modules/wishlist'
import React from 'react';

const WishlistContainer = () => {
    const wishlists = useSelector(state => state.wishlists)
    return (
        <Wishlist 
            wishlist = {wishlists}
        />
    )
}

export default connect (
    ({wishlist}) => ({
        
        wishlist: wishlist.wishlist,
    }),
    {remove_list}
) (WishlistContainer)