import Title from './components/Title';
import TweetList from './components/TweetList';
import { getInitialTweets, getTweets} from './api/tweetAPI';
import { useEffect, useState } from 'react';
import './App.css';
import AddTweet from './components/AddTweet';
import getNewListToRender from './lib/getNewListToRender';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';
import deleteTweet from './lib/deleteTweet';

function App() {
    
    // hook: list of tweets from API
    const [tweetsFromAPI, setTweetsFromAPI] = useState();
	// hook: list of tweets to render
	const [tweetList, setTweetList] = useState();
    // hook: (boolean) if true show 'no more tweets' message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState(false);

    useEffect(() => {
        // call API only once to get list of tweets
        const listOfAllTweets = getTweets();
        // set full tweet list
        setTweetsFromAPI(listOfAllTweets);
        // set list of tweets to render
        setTweetList(getInitialTweets(listOfAllTweets));
    },[]);

    // called onclick of addtweet button
    // TODO: think how to isolate logic
    const handleAddTweet = () => {

        if(tweetsFromAPI.length !== tweetList.length){
            setTweetList(getNewListToRender([...tweetsFromAPI], [...tweetList]));
        } else if (tweetsFromAPI.length === tweetList.length) {
            setDisplayNoMoreTwMex(true);
        }

    }
    

    const handleDeleteTweet = (tweetIdToRemove) => {

        setTweetList(deleteTweet([...tweetList], tweetIdToRemove));
        setDisplayNoMoreTwMex(false);

    }
    
	return (
		<div>
			<Title />
			<AddTweet action={handleAddTweet} />
			<NoMoreTweetsMessage display={displayNoMoreTwMex} />
			<TweetList changeStateAction={handleDeleteTweet} tweetList={tweetList} />
		</div>
	);
}

export default App;

// rinominare funzioni collegate alle azioni dell'utente con handleEcc...
