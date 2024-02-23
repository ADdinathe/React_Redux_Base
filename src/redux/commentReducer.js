import {COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD} from "./types";
import uniqid from "uniqid";

const initialState = {
    comments: []
}

export const commentReducer = (state = initialState, action) =>{
    console.log('commentReducer > ', action);


    switch (action.type){
        case COMMENT_CREATE:

            return {
                ...state,
                comments: [...state.comments, action.data],
            }

        case COMMENT_UPDATE:

            return {
                ...state,
                comments: state.comments.map((item)=>{
                    if(item.id === action.data.id){
                        return action.data
                    }
                    return item
                }),
            }


        case COMMENT_DELETE:
            console.log(state.comments, action)

            return {
                ...state,
                comments: state.comments.filter((item)=> item.id !== action.id),
            }

        case COMMENTS_LOAD:


            return {
                ...state,
                comments: [...state.comments, ...action.data.map(({body})=>({
                    text:body,
                    id: uniqid(),
                }))]
            }

        default:
            return state;
    }
}