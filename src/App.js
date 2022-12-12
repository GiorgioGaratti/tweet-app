import Title from './components/Title';
import TweetList from './components/TweetList';
import { getInitialTweets, getTweets} from './api/tweetAPI';
import { useEffect, useState } from 'react';
import './App.css';
import AddTweet from './components/AddTweet';
import findNewTweets from './lib/findNewTweets';
import findMostRecentTweet from './lib/findMostRecentTweet';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';

function App() {

	// hook: list of tweets to render
	const [tweetList, setTweetList] = useState();

    useEffect(() => {
        // full list of tweets from API
        const tweetsFromAPI = getTweets();
        setTweetList(getInitialTweets([...tweetsFromAPI]));
    }, []);

    // hook: (boolean) if true show 'no more tweets' message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState(false);

    if(tweetList !== null){

        // called onclick of addtweet button
	    const handleAddTweet = (tweetsFromAPI) => {

		/* // shallow copy of full tweet list from API
		const fullListOfTweet = [...tweetList.at(1)]; */

		/* // shallow copy of rendered tweets list
		const listOfRenderedTweets = [...tweetList.at(0)]; */

		if(tweetsFromAPI.length !== tweetList.length){
			const listOfNotDisplayedTweets = findNewTweets(tweetsFromAPI, tweetList);

			const newTweetToAdd = findMostRecentTweet(listOfNotDisplayedTweets);

			tweetList.unshift(newTweetToAdd);

			setTweetList(tweetList);
		} else if (tweetsFromAPI.length === tweetList.length) {
			setDisplayNoMoreTwMex(true);
		}
	}

    }
    

    const handleDeleteTweetCallback = (newListOfTweetsToRender) => {
        setTweetList(newListOfTweetsToRender);
    }

	return (
		<div>
			<Title />
			<AddTweet action={handleAddTweet} />
			<NoMoreTweetsMessage display={displayNoMoreTwMex} />
			<TweetList tweetList={tweetList} changeStateAction={handleDeleteTweetCallback} />
		</div>
	);
}

export default App;

// rinominare funzioni collegate alle azioni dell'utente con handleEcc...
