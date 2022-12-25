// get id of most recent tweet from a list
const findIdOfMostRecentTweet = (tweetList, listOfNewTweetsIds) => {

    // look for tweets from the full list with id figuring in "listOfNewTweetsIds"
    const newTweetsList = tweetList.filter(tweet => {
        const existingTweetId = listOfNewTweetsIds.find(id => id === tweet.id);
        return existingTweetId !== undefined ? true : false;
    });

    // sort tweet list by the order of ISO-formatted dates
    return newTweetsList.sort((a,b) => {
        let exit;
        if (a.tweetContent.datetime.dateISO > b.tweetContent.datetime.dateISO){
            exit = 1;
        } else if (a.tweetContent.datetime.dateISO === b.tweetContent.datetime.dateISO){
            exit = 0;
        } else if (a.tweetContent.datetime.dateISO < b.tweetContent.datetime.dateISO){
            exit = -1;
        }
        return exit;
    }).at(newTweetsList.length -1).id; // return the id of the tweet with the most recent date

}

export default findIdOfMostRecentTweet;