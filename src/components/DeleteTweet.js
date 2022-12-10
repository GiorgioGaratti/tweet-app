import deleteTweet from "../lib/deleteTweet";

// trash bin icon
const DeleteTweet = (props) => {
    return  <div className="deletetweet">
                <button className="deletetweetbtn" onClick={() => deleteTweet(props)}><i className="fa fa-trash"></i></button>
            </div>;
}

export default DeleteTweet;