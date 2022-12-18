// AddTweet -> button to render most recent tweet from API
const AddTweet = (props) => {

    return (
        <div className="addtweet">
            <button className="addbtn" onClick={props.action} disabled={props.disabled}>
                Aggiungi Tweet
            </button>
        </div>
    );
}


export default AddTweet;