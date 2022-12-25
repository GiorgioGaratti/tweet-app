// callback called onlick of delete button
const deleteTweet = (listOfTweetIds, tweetIdToRemove) => {

    // remove from list of rendered tweets the one selected
    const newListOfTweetsIdToRender = listOfTweetIds.filter((id, index, array) => {
        return id !== tweetIdToRemove;
    });

    return newListOfTweetsIdToRender;
}

export default deleteTweet;