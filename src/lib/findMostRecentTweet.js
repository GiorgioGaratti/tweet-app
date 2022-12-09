// get most recent tweet from a list
const findMostRecentTweet = (listOfNotDisplayedTweets) => {

    // sort tweet list by the order of ISO-formatted dates
    return listOfNotDisplayedTweets.sort((a,b) => {
        let exit;
        if (a.tweetContent.datetime.dateISO > b.tweetContent.datetime.dateISO){
            exit = 1;
        } else if (a.tweetContent.datetime.dateISO === b.tweetContent.datetime.dateISO){
            exit = 0;
        } else if (a.tweetContent.datetime.dateISO < b.tweetContent.datetime.dateISO){
            exit = -1;
        }
        return exit;
    }).at(listOfNotDisplayedTweets.length -1);// return tweet with most recent date

}

export default findMostRecentTweet;