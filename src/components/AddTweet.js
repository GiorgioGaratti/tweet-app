// AddTweet -> button to render most recent tweet from API
const AddTweet = (props) => {

    const handleAddTweet = props.action;

    return (
        <div className="addtweet">
            <button className="addbtn" onClick={() => handleAddTweet([...props.tweetsFromAPI],[...props.tweetList])}>
                Aggiungi Tweet
            </button>
        </div>
    );
}


export default AddTweet;