import Image from "./Image";
import User from "./User";
import TweetContent from "./TweetContent";

const Tweet = (props) => {
    return (
        <div className="tweet">
            <Image tweetContent={props.tweetContent} />
            <div className="tweetbody">
                <User user={props.user} />
                <TweetContent tweetContent={props.tweetContent} />
            </div>
        </div>
    );
}

export default Tweet;