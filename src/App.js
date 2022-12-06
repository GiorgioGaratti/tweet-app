import Title from './components/Title';
import TweetList from './components/TweetList';
import getTweets from './api/tweetAPI';
import './App.css';

function App() {

  const tweetList = getTweets();

  return (
    <div>
      <Title />
      <TweetList tweetList={tweetList}/>
      {/* <div className='TweetList' tweetList={tweetList}>
        <div className='Tweet' 
          key={id}
          >
          <img className='Image'></img>
          <div className='User'></div>
          <div className='TweetContent'></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
