import findNewTweetsIds from "./findNewTweetsIds";
import findIdOfMostRecentTweet from "./findIdOfMostRecentTweet";

const getNewListOfTweetsIdsToRender = (tweetList, listOfTweetIds) => {
    const listOfNewTweetsIds = findNewTweetsIds(tweetList, listOfTweetIds);
    const newTweetIdToAdd = findIdOfMostRecentTweet(tweetList, listOfNewTweetsIds);
    const newlistOfTweetIds = listOfTweetIds;
    newlistOfTweetIds.unshift(newTweetIdToAdd);

    return newlistOfTweetIds;
}

export default getNewListOfTweetsIdsToRender;