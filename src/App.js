import Title from './components/Title';
import TweetList from './components/TweetList';
import { getInitialTweets, getTweets} from './api/tweetAPI';
import { useEffect, useState } from 'react';
import './App.css';
import AddTweet from './components/AddTweet';
import findNewTweets from './lib/findNewTweets';
import findMostRecentTweet from './lib/findMostRecentTweet';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';
import deleteTweet from './lib/deleteTweet';

function App() {
    
    // hook: list of tweets from API
    const [tweetsFromAPI, setTweetsFromAPI] = useState();
	// hook: list of tweets to render
	const [tweetList, setTweetList] = useState();
    // hook: (boolean) if true show 'no more tweets' message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState();

    useEffect(() => {
        console.log("effects dopo mount di App.js:");
        const listOfAllTweets = getTweets();
        setTweetsFromAPI(listOfAllTweets);
        console.log(listOfAllTweets);
        setTweetList(getInitialTweets(listOfAllTweets));
        setDisplayNoMoreTwMex(false);
        console.log(false);
    },[]);

    useEffect(() => {
        console.log("set di tweetList");
    }, [tweetList]);

    useEffect(() => {
        console.log("effect dopo set di teewtlist from api");
    },[tweetsFromAPI]);

    // called onclick of addtweet button
    // TODO: think how to isolate logic
    const handleAddTweet = (tweetsFromAPI, tweetList) => {
        if(tweetsFromAPI.length !== tweetList.length){
            const listOfNotDisplayedTweets = findNewTweets(tweetsFromAPI, tweetList);

            const newTweetToAdd = findMostRecentTweet(listOfNotDisplayedTweets);

            tweetList.unshift(newTweetToAdd);

            setTweetList(tweetList);
        } else if (tweetsFromAPI.length === tweetList.length) {
            setDisplayNoMoreTwMex(true);
        }
    }
    

    const handleDeleteTweet = (tweetIdToRemove) => {
        console.log("chiamata handleDeleteTweet");
        setTweetList(deleteTweet(tweetList,tweetIdToRemove));
    }
    
    console.log("render App.js");

	return (
		<div>
			<Title />
			<AddTweet action={handleAddTweet} tweetsFromAPI={tweetsFromAPI} tweetList={tweetList} />
			<NoMoreTweetsMessage display={displayNoMoreTwMex} />
			<TweetList tweetList={tweetList} changeStateAction={handleDeleteTweet} />
		</div>
	);
}

export default App;

// rinominare funzioni collegate alle azioni dell'utente con handleEcc...
