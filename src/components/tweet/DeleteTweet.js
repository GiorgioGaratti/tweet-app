import handleDeleteTweet from '../../App';
// trash bin icon
const DeleteTweet = (props) => {
    return  <div className="deletetweet">
                <button className="deletetweetbtn" onClick={() => handleDeleteTweet(props.id)}><i className="fa fa-trash"></i></button>
            </div>;
}

export default DeleteTweet;