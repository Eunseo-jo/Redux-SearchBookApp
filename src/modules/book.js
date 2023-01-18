import { handleActions } from "redux-actions";
import * as api from '../lib/api'

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

export const getPost = keyword => async dispatch => {
    dispatch({type: GET_POST})
    try {
        const response = await api.getPost(keyword)
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        })
        throw e;
    }
}

const initialState = {
    loading : {
        GET_POST: false,
    },
    post: null,
}

const book = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            }
        }),
    },
    initialState
)

export default book;