// callback called onlick of delete button
const deleteTweet = (tweetListCopy, tweetIdToRemove) => {

    // remove from list of rendered tweets the one selected
    const newListOfTweetsToRender = tweetListCopy.filter((tweet) => {
        return tweet.id !== tweetIdToRemove;
    });

    return newListOfTweetsToRender;
}

export default deleteTweet;