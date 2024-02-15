import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF
} from "./types";

export function incrementLikes(){
    return {
        type: INCREMENT,

    }
};

export function decrementLikes(){
    return {
        type: DECREMENT,

    }
};


export function inputText(text){
    return {
        type: INPUT_TEXT,
        text
    }
};


export function createComment(text , id){
    return {
        type: COMMENT_CREATE,
        data: { text, id },
    }
};

export function updateComment(text , id){
    return {
        type: COMMENT_UPDATE,
        data: { text, id },
    }
};

export function deleteComment(id){
    return {
        type: COMMENT_DELETE,
        id,
    }
};

export function loadComments(){
    return async dispatch => {

       try  {
           dispatch(loaderOn())
           const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
           const jsonData = await response.json();
           dispatch({
               type: COMMENTS_LOAD,
               data: jsonData
           });
           dispatch(loaderOff());
       } catch (e) {
           dispatch(loaderOff());
           dispatch(errorOn('ERROR!'));
       }
    }
};

export function loaderOn(){
    return {
        type: LOADER_DISPLAY_ON,
    }
};

export function loaderOff(){
    return {
        type: LOADER_DISPLAY_OFF,
    }
};

export function errorOn(error){


    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            error,
        })


        setTimeout(()=>{
            dispatch(errorOff())
        }, 2000)
    }


};

export function errorOff(){
    return {
        type: ERROR_DISPLAY_OFF,
    }
};
