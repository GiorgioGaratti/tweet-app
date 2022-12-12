import handleDeleteTweet from "../../lib/deleteTweet";

// trash bin icon
const DeleteTweet = (props) => {
    return  <div className="deletetweet">
                <button className="deletetweetbtn" onClick={() => handleDeleteTweet(props)}><i className="fa fa-trash"></i></button>
            </div>;
}

export default DeleteTweet;