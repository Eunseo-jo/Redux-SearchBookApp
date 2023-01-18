import { createAction, handleActions } from "redux-actions";

const ADD_LIST = 'sample/ADD_LIST';
const DELETE_LIST = 'sample/DELETE_LIST';

export const add = createAction(ADD_LIST);
export const remove = createAction(DELETE_LIST);

export const add_list = (wishlist) =>  {
    //dispatch(add);
    console.log("add");
    return {
        type: ADD_LIST,
        wishlist: {
            id: wishlist.id,
            title: wishlist.title
        }
    }
}

export const remove_list = (id) =>  {
    //dispatch(remove());
    return {
        type: DELETE_LIST,
        id
    }
}

/*

export const add = title => ({
  type: ADD_LIST,
  wishlist: {
    id: id++,
    title: title,
  }
})
export const remove = () => ({
    type: DELETE_LIST,
    id
  })
*/
const initialState = {
    wishlists: [
    {
      id: 0,
      title: "title"
    },
  ],
}

const wishlist = handleActions(
    {
      [ADD_LIST]: (state, action) => ({
        
        wishlists: [...state.wishlists, action.wishlist ]
        //state.wishlist.concat(action.payload),
        //id: action.payload.id
        
      }),
  
      [DELETE_LIST]: (state, action) => ({
        //...state,
        //wishlists: state.wishlist.filter(wishlist => wishlist.id !== action.payload.id)
        wishlists: [...state.wishlists.filter( (list) => list.id !== action.id) ]
      }),
    },
    initialState,
  )

export default wishlist;