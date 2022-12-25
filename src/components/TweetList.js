import useTweetListToRender from "../hooks/useTweetListToRender";
import Tweet from "./tweet/Tweet";
import { memo } from "react";

// list of tweets to display
const TweetList = memo(function TweetList(props) {

    const [tweetListToRender] = useTweetListToRender(props);

    return (
        <div className="tweetlist">
            {
            // filter the full list of tweets keeping the ones to render
            tweetListToRender.map(tweet => {
                return <Tweet 
                    className="tweet" 
                    key={tweet.id} // unique id required by react for each list element, cannot be accessed from props
                    id={tweet.id}
                    user={tweet.user} 
                    tweetContent={tweet.tweetContent}
                    action={props.action} />;
            })
            }
        </div>
    );
})

export default TweetList;