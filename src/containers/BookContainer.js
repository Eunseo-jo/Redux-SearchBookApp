import {connect } from 'react-redux'
import Book from '../components/Book/Book'
import { getPost } from '../modules/book'
import { add_list } from '../modules/wishlist'
import React from 'react';

const BookContainer = ({
    post,
    loadingPost,
    
}) => {
    return (
        <div>
            <Book 
            key = {post}
            post = {post}
            loadingPost = {loadingPost}
            add_list = {add_list}
            />
        </div>
    )
}

export default connect (
    ({book}) => ({
        post: book.post,
        loadingPost: book.loading.GET_POST,
    }),
    {getPost}
) (BookContainer)