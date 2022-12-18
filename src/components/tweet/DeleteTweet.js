import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton} from '@mui/material';

// trash bin icon
const DeleteTweet = (props) => {
    return  (
        <div className="deletetweet">
            <IconButton className="deletebtn" onClick={() => props.changeStateAction(props.tweetId)}>
                <DeleteIcon />
            </IconButton>
        </div>
    )       
}

export default DeleteTweet;
