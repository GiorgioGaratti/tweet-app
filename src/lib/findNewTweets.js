// find not-yet-rendered tweets list, given two shallow copies
const findNewTweets = (fullListOfTweet, listOfRenderedTweet) => {
    
    // empty array where I add every tweet not figuring in the full list of tweet
    let newTweetsList = [];
    // for each tweet in the full list of tweet
    fullListOfTweet.forEach(tweet => {
        // I look for a rendered tweet matching its tweet.id
        // if I find one I save it in a variable, if not, that variable will be undefined
        const tweetAlreadyExisting = listOfRenderedTweet.find(renderedTweet => {
            return tweet.id === renderedTweet.id;
        });
        // if I haven't found none matching I add that tweet to the array to return
        return (tweetAlreadyExisting === undefined) ? newTweetsList.push(tweet) : null;
    });

    return newTweetsList;
}

export default findNewTweets;
