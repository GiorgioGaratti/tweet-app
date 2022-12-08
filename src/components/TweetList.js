import Tweet from "./Tweet";

const TweetList = (props) => {

    const copyTweetListToRender = [...props.tweetList.at(0)];

    return (
        <div className="tweetlist">
            {
            copyTweetListToRender.map(tweet => {
                return <Tweet 
                    className="tweet" 
                    key={tweet.id} 
                    user={tweet.user} 
                    tweetContent={tweet.tweetContent} />;
            })
            }
        </div>
    );
}

export default TweetList;