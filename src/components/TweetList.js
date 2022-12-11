import Tweet from "./tweet/Tweet";

const TweetList = (props) => {

    const copyTweetListToRender = [...props.tweetList.at(0)];

    return (
        <div className="tweetlist">
            {
            // render each tweet of the list
            copyTweetListToRender.map(tweet => {
                
            console.log("console.log ---> "+copyTweetListToRender.toString());
                return <Tweet 
                    className="tweet" 
                    key={tweet.id} // unique id required, cannot access from props
                    id={tweet.id}
                    user={tweet.user} 
                    tweetContent={tweet.tweetContent}
                    changeStateAction={props.changeStateAction}
                    tweetList={props.tweetList} />;
            })
            }
        </div>
    );
}

export default TweetList;