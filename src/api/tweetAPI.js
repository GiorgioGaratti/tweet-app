import Fakerator from "fakerator";
import createDate from "../lib/createDate";
import { loremIpsum } from "lorem-ipsum";

// get full list of stored tweets
const getTweets = () => {
    console.log("chiamata tweets API");
    const NUMBER_OF_TWEETS_IN_TOTAL = 7;

    let tweetsFromApi = [];
    for(let i = 0; i < NUMBER_OF_TWEETS_IN_TOTAL; i++){

        loremIpsum({
            count: Math.floor(Math.random() * 275 + 5),
            format: "plain",     
            units: "words"
        });

        const text = loremIpsum();

        const fullname = Fakerator().names.name();
        const username = Fakerator().internet.userName();

        const offset = Math.floor(Math.random() * (241) - 120);
        const datetime = createDate(offset);

        const tweetToAdd = {
            id: i,
            user: {
                imgAvatar: "https://i.pravatar.cc/60?img="+i,
                imgAvAlt: "foto avatar "+ i,
                fullname: fullname,
                username: "@"+username
            },   
            tweetContent: {
                imgSrc: "https://picsum.photos/350/200.jpg?random="+i,
                imgAlt: "foto tweet "+ i,
                text: text,
                datetime: {
                    dateISO: datetime.dateISO,
                    dateFormatted: datetime.dateFormatted
                },
                likes: Math.floor(Math.random()*1_000),
                views: Math.floor(Math.random()*100_000)
            }    
        };
        tweetsFromApi.push(tweetToAdd);
    }
    return tweetsFromApi;
};

export default getTweets;