// trovo la lista dei tweet non ancora reindirizzati a video filtrando la lista completa 
// per tutti quelli che soddisfano il test
const findNewTweets = (fullListOfTweet, listOfRenderedTweet) => {
    let newTweetsList = [...fullListOfTweet];

    for (let i = 0; i < listOfRenderedTweet.length; i++) {
        const tweetAlreadyExisting = fullListOfTweet.find(element =>
            element.id === listOfRenderedTweet.at(i).id
        )
        if (tweetAlreadyExisting !== undefined) {
            newTweetsList.splice(newTweetsList.indexOf(tweetAlreadyExisting), 1);
        }

    }

    return newTweetsList;
}

export default findNewTweets;