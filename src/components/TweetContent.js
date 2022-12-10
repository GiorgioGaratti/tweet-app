import DeleteTweet from "./DeleteTweet";

const TweetContent = (props) => {

    return (
        <div className="tweetcontent">
            <p className="tweettext">{props.tweetContent.text}</p>
            <p className="tweetdate">{props.tweetContent.datetime.dateFormatted}</p>{/* hh:mm - dd 'day' yyyy */}
            <div className="tweetinteraction">
                <img className="iconinteraction" src="img/heart.png" alt="heart"></img><p className="numberlikes">{props.tweetContent.likes}</p>
                <img className="iconinteraction" src="img/view.png" alt="view"></img><p className="numberviews">{props.tweetContent.views}</p>
                <DeleteTweet tweetId={props.tweetId} 
                    changeStateAction={props.changeStateAction}
                    tweetList={props.tweetList} />
            </div>
        </div>
    );
}

export default TweetContent;