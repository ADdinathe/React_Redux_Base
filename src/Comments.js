import SingleComment from "./SingleComment";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createComment, loadComments} from './redux/actions'
import uniqid from 'uniqid';

function Comments(props){
    // console.log('comment props > ', props);
    const dispatch = useDispatch();
    const [textComment, setTextComment] = useState('');

    const handleInput = (e)=>{
        // console.log('input >>',e.target.value);
        setTextComment(e.target.value);
    }

    const comments = useSelector((state)=>{
        // console.log('Comments State >>', state.commentReducer.comments);

        return state.commentReducer.comments
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submit >>', textComment);
        dispatch(createComment(textComment, uniqid()))
        setTextComment('')
    }


    useEffect(()=>{
        dispatch(loadComments());
    }, [dispatch])
    
    return(
        <div className="card-comments">
            <form className="comments-item-create" onSubmit={handleSubmit}>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {comments.map((data)=>(
                <SingleComment key={data.id} data={data} />
                ))
            }

        </div>
    )
}

export default Comments;