import Title from './components/Title';
import TweetList from './components/TweetList';
import './App.css';
import AddTweet from './components/AddTweet';
import NoMoreTweetsMessage from './components/NoMoreTweetsMessage';
import useApp from './hooks/useApp';

function App() {
    // call custom hook with data for components
    const [tweetList, displayNoMoreTwMex, listOfTweetIds, handleAddTweet, handleDeleteTweet] = useApp();
    
	return (
		<> {/* react fragment */}
			<Title />
			<AddTweet action={handleAddTweet} disabled={displayNoMoreTwMex} /> {/* "Aggiungi Tweet" button */}
			<NoMoreTweetsMessage display={displayNoMoreTwMex} /> {/* "Nessun Nuovo Tweet" message */}
			<TweetList action={handleDeleteTweet} tweetList={tweetList} listOfTweetIds={listOfTweetIds} />
		</>
	);
}

export default App;
