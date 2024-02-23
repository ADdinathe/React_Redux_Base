import {useEffect, useState} from "react";
import { deleteComment, updateComment} from "./redux/actions";
import {useDispatch} from "react-redux";

function SingleComment(props){
    // console.log('single comment props > ', props);

     const {text, id} = props.data;
    const dispatch = useDispatch();
    const [textComment, setTextComment] = useState('');

    useEffect(()=>{
        if(text){
            setTextComment(text);
        }
     },[text])

    const handleInput = (e)=>{
        // console.log('input >>',e.target.value);
        setTextComment(e.target.value);
    }

    const handleDelete = ()=>{
        dispatch(deleteComment(id))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submit >>', textComment);
        dispatch(updateComment(textComment, id))
    }


    return(
        <form className="comments-item" onSubmit={handleSubmit}>
            <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
            <input type="text" value={textComment} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}

export default SingleComment;