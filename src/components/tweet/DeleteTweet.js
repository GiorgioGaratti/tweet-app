// trash bin icon
const DeleteTweet = (props) => {
    return  <div className="deletetweet">
                <button className="deletetweetbtn" onClick={props.changeStateAction}><i className="fa fa-trash"></i></button>
            </div>;
}

export default DeleteTweet;