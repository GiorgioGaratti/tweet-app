import { useEffect, useState } from "react";

const useTweetListToRender = ({tweetList, listOfTweetIds}) => {
    const [tweetListToRender, setTweetListToRender] = useState([]);

    useEffect(() => {
        let tweetListToSet = [];
        [...listOfTweetIds].forEach( id => {
            const tweetToPush = [...tweetList].find(tweet => tweet.id === id);
            tweetListToSet.push(tweetToPush);
        });
        setTweetListToRender(tweetListToSet);
    }, [tweetList, listOfTweetIds]);
        

    return [tweetListToRender];
}

export default useTweetListToRender;