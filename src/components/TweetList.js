import Tweet from "./Tweet";

const TweetList = (props) => {
    return (
        <div className="tweetlist">
            {props.tweetList.map(tweet => {
                return <Tweet 
                    className="tweet" 
                    key={tweet.id} 
                    user={tweet.user} 
                    tweetContent={tweet.tweetContent} />;
            })}
        </div>
    );
}

export default TweetList;