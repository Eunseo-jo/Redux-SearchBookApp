import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPost } from '../../modules/book'
import './Search.css';

export const Search = () => {

    const [searchKey, setSearchKey] = useState("");
    const dispatch = useDispatch();
    
    const onChange = (e) => {
        setSearchKey(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (searchKey.trim() === "") return;
        else {
            dispatch(getPost(searchKey))
        }
    }


    return (
        <section>
            <div className = "Search">
                    <input onChange = {onChange} value = {searchKey}/> <button type = "submit" onClick = {onSubmit}> submit </button>
            </div>
        </section>
    )
}
export default Search;