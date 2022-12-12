// called onlick of delete button
const deleteTweet = (tweetList, tweetIdToRemove) => {
        
/*     // shallow copy of rendered tweets list
    const listOfRenderedTweets = [...props.tweetList.at(0)];
 */
    // remove from list of rendered tweets the one selected
    const newListOfTweetsToRender = [...tweetList].filter((tweet) => {
        return tweet.id !== tweetIdToRemove;
    });

    /* // change tweetList state in App.js
    const callback = props.changeStateAction;
    callback(newListOfTweetsToRender); */

    return newListOfTweetsToRender;
}

export default deleteTweet;