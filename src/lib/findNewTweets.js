// find not-yet-rendered tweets list
const findNewTweets = (fullListOfTweet, listOfRenderedTweet) => {
    // list to return
    let newTweetsList = [...fullListOfTweet];

    // for each rendered tweet
    for (let i = 0; i < listOfRenderedTweet.length; i++) {
        // find a correspondence in the full list of tweet
        const tweetAlreadyExisting = fullListOfTweet.find(element =>
            element.id === listOfRenderedTweet.at(i).id
        )
        // if one gets found, remove from the list to return
        if (tweetAlreadyExisting !== undefined) {
            newTweetsList.splice(newTweetsList.indexOf(tweetAlreadyExisting), 1);
        }
        
    }

    return newTweetsList;
}

export default findNewTweets;