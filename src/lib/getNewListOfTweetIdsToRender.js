import findNewTweetsIds from "./findNewTweetsIds";
import findIdOfMostRecentTweet from "./findIdOfMostRecentTweet";

// called when I'm adding a tweet to the list of rendered ones
const getNewListOfTweetsIdsToRender = (tweetList, listOfTweetIds) => {
    const listOfNewTweetsIds = findNewTweetsIds(tweetList, listOfTweetIds);
    const newTweetIdToAdd = findIdOfMostRecentTweet(tweetList, listOfNewTweetsIds);
    listOfTweetIds.unshift(newTweetIdToAdd);

    return listOfTweetIds;
}

export default getNewListOfTweetsIdsToRender;