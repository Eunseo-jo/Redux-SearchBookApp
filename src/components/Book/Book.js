import { useDispatch } from 'react-redux';
import './Book.css';

const Book = ({loadingPost, post, add_list }) => {

    const dispatch = useDispatch();

    const addWishList = (id, title) => {
        console.log("id & title", id, title);
        const newWishlist = {
            id: id,
            title: title,
        }
        dispatch(add_list(newWishlist))
    }

    return (
        <div>
            { loadingPost ? 'loading..' : post?.items.map((book) => 
                { return (
                    <li className = "Book-Container"  key = {book.id}
                        onClick = { () =>addWishList(book.id, book.volumeInfo.title)}>
                            <section>
                            <img src = {book.volumeInfo.imageLinks?.smallThumbnail} alt = {book.id} />
                            </section>

                            <section>
                            <h3> {book.volumeInfo.title} </h3>
                            <p> <b>Authors: </b> { book.volumeInfo?.authors ? book.volumeInfo?.authors: "Unknown" } </p>
                            <p> <b>Publisher: </b> { book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unknown" } </p>
                            <p> <b>published date: </b> { book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "Unknown" }</p>
                            <p> <b>description: </b> { book.volumeInfo.description ? book.volumeInfo.description.slice(0,300) : "Unknown"} </p>
                            </section>
                        </li>
                        )
                    })
                }
        </div>
    )
}

export default Book;