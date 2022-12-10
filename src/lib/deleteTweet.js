// called onlick of delete button
const deleteTweet = (props) => {
        
    // shallow copy of rendered tweets list
    const listOfRenderedTweets = [...props.tweetList.at(0)];

    // remove from list of rendered tweets the one selected
    const newListOfTweetsToRender = listOfRenderedTweets.filter((tweet) => {
        return tweet.id !== props.tweetId;
    });

    // change tweetList state in App.js
    const callback = props.changeStateAction;
    callback(newListOfTweetsToRender);
}

export default deleteTweet;