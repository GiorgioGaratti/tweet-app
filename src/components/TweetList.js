import Tweet from "./Tweet";

const TweetList = (props) => {

    const copyTweetListToRender = [...props.tweetList.at(0)];

    return (
        <div className="tweetlist">
            {
            // render each tweet of the list
            copyTweetListToRender.map(tweet => {
                return <Tweet 
                    className="tweet" 
                    key={tweet.id} // unique id required
                    user={tweet.user} 
                    tweetContent={tweet.tweetContent} />;
            })
            }
        </div>
    );
}

export default TweetList;