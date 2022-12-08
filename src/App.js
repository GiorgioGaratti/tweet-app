import Title from './components/Title';
import TweetList from './components/TweetList';
import { getInitialTweets, getTweets} from './api/tweetAPI';
import { useState } from 'react';
import './App.css';
import AddTweet from './components/AddTweet';
import findNewTweets from './lib/findNewTweets';
import findMostRecentTweet from './lib/findMostRecentTweet';

function App() {

	// inizializzo un hook contenente un array con: [elementi da mostrare, tutti i tweet dalle API]
	const [tweetList, setTweetList] = useState([getInitialTweets(), getTweets()]);


	const addTweet = () => {
		// shallow copy della lista completa dei tweeet dall'api
		const fullListOfTweet = [...tweetList.at(1)];

		// shallow copy della lista completa dei tweeet a video
		const listOfRenderedTweet = [...tweetList.at(0)];

		const listOfNotDisplayedTweets = findNewTweets(fullListOfTweet, listOfRenderedTweet);

		const newTweetToAdd = findMostRecentTweet(listOfNotDisplayedTweets);

		listOfRenderedTweet.unshift(newTweetToAdd);

		setTweetList([listOfRenderedTweet,fullListOfTweet]);
	}

	return (
		<div>
			<Title />
			<AddTweet action={addTweet} />
			<TweetList tweetList={tweetList} />
		</div>
	);
}

export default App;
