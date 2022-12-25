import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteTweet from "./DeleteTweet";
import useTweetContent from "../../hooks/useTweetContent";

const TweetContent = (props) => {

    const [likes, likeState, handleAddLike] = useTweetContent(props);

    return (
        <div className="tweetcontent">
            <p className="tweettext">{props.tweetContent.text}</p>
            <p className="tweetdate">{props.tweetContent.datetime.dateFormatted}</p>{/* hh:mm - dd 'day' yyyy */}
            <div className="tweetinteraction">
                <div id="likeinteraction" onClick={handleAddLike} className={likeState ? "likesdivtrue" : "likesdivfalse"}>
                    {likeState? <FavoriteIcon className="likesicon" /> : <FavoriteBorderOutlinedIcon aria-label="fingerprint" className="likesicon" />}
                    <p className={likeState ? "numberlikes true" : "numberlikes false"}>{likes}</p>
                </div>
                <VisibilityIcon />
                <p className="numberviews">{props.tweetContent.views}</p>
                <DeleteTweet tweetId={props.tweetId} 
                    action={props.action} />
            </div>
        </div>
    );
}

export default TweetContent;