import Tweet from "./tweet/Tweet";

const TweetList = (props) => {
    // to avoid errors in init phase, before mounting App.js and initializing 'tweetList' hook
    if(props.tweetList !== undefined){

        return (
            <div className="tweetlist">
                {
                // render each tweet of the list
                [...props.tweetList].map(tweet => {
                    
                    return <Tweet 
                        className="tweet" 
                        key={tweet.id} // unique id required, cannot access from props
                        id={tweet.id}
                        user={tweet.user} 
                        tweetContent={tweet.tweetContent}
                        changeStateAction={props.changeStateAction} />;
                })
                }
            </div>
        );

    }
    
}

export default TweetList;