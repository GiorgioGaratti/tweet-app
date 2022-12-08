// data una qualsiasi lista di tweet recupero quello con la data più recente
const findMostRecentTweet = (listOfNotDisplayedTweets) => {

    return listOfNotDisplayedTweets.sort().at(0);

}

export default findMostRecentTweet;