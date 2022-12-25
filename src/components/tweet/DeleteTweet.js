import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton} from '@mui/material';
import { memo } from 'react';

// trash bin icon
const DeleteTweet = memo(function DeleteTweet(props) {
    return(
        <div className="deletetweet">
            <IconButton className="deletebtn" onClick={() => props.action(props.tweetId)}>
                <DeleteIcon />
            </IconButton>
        </div>);
});

export default DeleteTweet;
