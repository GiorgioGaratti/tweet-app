import Image from "./Image";
import User from "./User";
import TweetContent from "./TweetContent";

const Tweet = (props) => {
    return (
        <div className="tweet">
            <Image tweetContent={props.tweetContent} />
            <div className="tweetbody">
                <User user={props.user} />
                <TweetContent tweetId={props.id} 
                    tweetContent={props.tweetContent} 
                    changeStateAction={props.changeStateAction}
                    tweetList={props.tweetList} />
            </div>
        </div>
    );
}

export default Tweet;