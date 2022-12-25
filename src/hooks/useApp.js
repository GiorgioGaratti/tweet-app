import { useCallback, useEffect, useState } from "react";
import getTweets from "../api/tweetAPI";
import deleteTweet from "../lib/deleteTweet";
import getNewListOfTweetIdsToRender from "../lib/getNewListOfTweetIdsToRender";

const useApp = () => {
    // state variable: list of tweets from API
	const [tweetList, setTweetList] = useState([]);
    // state variable: (boolean) if true show "Nessun Nuovo Tweet" message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState(false);
    // state variable: list of rendered tweets ids
    const[listOfTweetIds, setListOfTweetIds] = useState([]);

    // hook: get all tweets from API and set initial list of tweets ids
    useEffect(() => {
        setTweetList(getTweets());
        const INITIAL_TWEETS_ID_LIST = [1, 2, 3];
        setListOfTweetIds(INITIAL_TWEETS_ID_LIST);
    },[]);

    // called onclick of addtweet button
    const handleAddTweet = useCallback(() => {
        if(tweetList.length !== listOfTweetIds.length){
            setListOfTweetIds(getNewListOfTweetIdsToRender([...tweetList], [...listOfTweetIds]));
        } else if (tweetList.length === listOfTweetIds.length) {
            setDisplayNoMoreTwMex(true);
        }
    },[tweetList, listOfTweetIds]);
    
    // called onclick of deletetweet button
    const handleDeleteTweet = useCallback((tweetIdToRemove) => {
        setListOfTweetIds(deleteTweet([...listOfTweetIds], tweetIdToRemove));
        setDisplayNoMoreTwMex(false);
    }, [ listOfTweetIds]);

    return [tweetList, displayNoMoreTwMex, listOfTweetIds, handleAddTweet, handleDeleteTweet];
}

export default useApp;