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
    const [tweetsFromAPI, setTweetsFromAPI] = useState([]);
	// hook: list of tweets to render
	const [tweetList, setTweetList] = useState([]);
    // hook: (boolean) if true show 'no more tweets' message
	const [displayNoMoreTwMex, setDisplayNoMoreTwMex] = useState(false);

/*     const [json, setJson] = useState({});

    useEffect(() => {
        const options = {
            method: 'GET', 
            headers: {
                'X-Api-Key': 'umQrmYyfsElCHzp9sU+TSQ==EXTZJphEj1dZo9S3'
            }
        }

        const getUser = async () => {
            const response = await fetch("https://api.api-ninjas.com/v1/randomuser", options);
            const json = await response.json();
            setJson(json);
        }

        getUser();
    }, []); */

    useEffect(() => {
        // call API to get list of tweets only once 
        const listOfAllTweets = getTweets(/* json */);
        // set full tweet list
        setTweetsFromAPI(listOfAllTweets);
        // set list of tweets to render
        setTweetList(getInitialTweets(listOfAllTweets));

    }, [/* json */]);

    // called onclick of addtweet button
    const handleAddTweet = () => {
        if(tweetsFromAPI.length !== tweetList.length){
            setTweetList(getNewListToRender([...tweetsFromAPI], [...tweetList]));
        } else if (tweetsFromAPI.length === tweetList.length) {
            setDisplayNoMoreTwMex(true);
        }
    }
    
    // called onclick of deletetweet button
    const handleDeleteTweet = (tweetIdToRemove) => {
        setTweetList(deleteTweet([...tweetList], tweetIdToRemove));
        setDisplayNoMoreTwMex(false);
    }
    
	return (
		<div>
			<Title />
			<AddTweet action={handleAddTweet} disabled={displayNoMoreTwMex} />
			<NoMoreTweetsMessage display={displayNoMoreTwMex} />
			<TweetList changeStateAction={handleDeleteTweet} tweetList={tweetList} />
		</div>
	);
}

export default App;
