import axios from 'axios'

export const getPost = (keyword) =>{
    
    return axios.get (`https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=0&maxResults=20`);}

