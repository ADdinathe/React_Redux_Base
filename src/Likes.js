import {connect} from 'react-redux';
import {incrementLikes, decrementLikes} from "./redux/actions";

function Likes(props){
    console.log('render > ', props);

    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}


function mapStateToProps(state){
    console.log('mapStateToProps >', state);
    const {likesReducer} = state;
    return {
        likes: likesReducer.likes,
    }
}

function mapDispatchToProps(dispatch){
    console.log('dispatcher > ', dispatch);

    return {
        onIncrementLikes: ()=>dispatch(incrementLikes()),

        // TODO: почему мы можем возвращать и не возвращать dispdtch
        onDecrementLikes: ()=>{
            console.log('click');
            const action = {type: 'DECREMENT'};
            dispatch(decrementLikes());
        }
        // onDecrementLikes: ()=>dispatch(decrementLikes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);