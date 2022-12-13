import findNewTweets from "./findNewTweets";
import findMostRecentTweet from "./findMostRecentTweet";

const getNewListToRender = (fullListOfTweet, listOfRenderedTweet) => {
    const listOfNotDisplayedTweets = findNewTweets(fullListOfTweet, listOfRenderedTweet);
    const newTweetToAdd = findMostRecentTweet(listOfNotDisplayedTweets);
    const newListToRender = listOfRenderedTweet;
    newListToRender.unshift(newTweetToAdd);

    return newListToRender;
}

export default getNewListToRender;