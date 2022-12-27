import { useEffect, useState } from "react";
import getTweets from "../api/tweetAPI";
import deleteTweet from "../lib/deleteTweet";
import getNewListOfTweetIdsToRender from "../lib/getNewListOfTweetIdsToRender";

const useApp = () => {
    // state variable: list of tweets from API
	const [tweetList, setTweetList] = useState([]);
    // state variable: (boolean) if true show message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState(false);
    // state variable: list of rendered tweets ids
    const [listOfTweetIds, setListOfTweetIds] = useState([]);

    // hook: get all tweets from API and set initial list of tweets ids
    useEffect(() => {
        setTweetList(getTweets());
        const INITIAL_TWEETS_ID_LIST = [1, 2, 3];
        setListOfTweetIds(INITIAL_TWEETS_ID_LIST);
    },[]);

    // called onclick of addtweet button
    const handleAddTweet = () => {
        // if I have at least one tweet to show
        if(tweetList.length !== listOfTweetIds.length){
            setListOfTweetIds(getNewListOfTweetIdsToRender([...tweetList], [...listOfTweetIds]));
        } 
        // else if there are no tweets to display
        else if (tweetList.length === listOfTweetIds.length) {
            setDisplayNoMoreTwMex(true);
        }
    };
    
    // called onclick of deletetweet button
    const handleDeleteTweet = (tweetIdToRemove) => {
        setListOfTweetIds(deleteTweet([...listOfTweetIds], tweetIdToRemove));
        setDisplayNoMoreTwMex(false);
    };

    return [tweetList, displayNoMoreTwMex, listOfTweetIds, handleAddTweet, handleDeleteTweet];
}

export default useApp;