import { memo } from "react";

// AddTweet -> button to display most recent tweet from API
const AddTweet = memo(function AddTweet({action, disabled}) {
    return (
        <div className="addtweet">
            <button className="addbtn" onClick={action} disabled={disabled}>
                Aggiungi Tweet
            </button>
        </div>
    );
});

export default AddTweet;