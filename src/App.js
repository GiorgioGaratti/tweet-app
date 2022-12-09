import Title from './components/Title';
import TweetList from './components/TweetList';
import { getInitialTweets, getTweets} from './api/tweetAPI';
import { useState } from 'react';
import './App.css';
import AddTweet from './components/AddTweet';
import findNewTweets from './lib/findNewTweets';
import findMostRecentTweet from './lib/findMostRecentTweet';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';

function App() {

	// hook: [tweet list to render, tweet list from API]
	const [tweetList, setTweetList] = useState([getInitialTweets(), getTweets()]);

    // hook: (boolean) if true show 'no more tweets' message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState(false);

    // called onclick of addtweet button
	const addTweet = () => {

		// shallow copy of full tweet list from API
		const fullListOfTweet = [...tweetList.at(1)];

		// shallow copy of rendered tweets list
		const listOfRenderedTweet = [...tweetList.at(0)];

		if(fullListOfTweet.length !== listOfRenderedTweet.length){
			const listOfNotDisplayedTweets = findNewTweets(fullListOfTweet, listOfRenderedTweet);

			const newTweetToAdd = findMostRecentTweet(listOfNotDisplayedTweets);

			listOfRenderedTweet.unshift(newTweetToAdd);

			setTweetList([listOfRenderedTweet,fullListOfTweet]);
		} else if (fullListOfTweet.length === listOfRenderedTweet.length) {
			setDisplayNoMoreTwMex(true);
		}
	}

	return (
		<div>
			<Title />
			<AddTweet action={addTweet} />
			<NoMoreTweetsMessage display={displayNoMoreTwMex} />
			<TweetList tweetList={tweetList} />
		</div>
	);
}

export default App;
