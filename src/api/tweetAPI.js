import getDates from '../lib/createDate.js';

// change this value to set initial number of tweets to render
const TWEETSTODISPLAYONSTART = 3;

// get dates objects for tweets
const datetimeList = getDates();

const datetime1 = datetimeList.at(0);
const datetime2 = datetimeList.at(1);
const datetime3 = datetimeList.at(2);
const datetime4 = datetimeList.at(3);
const datetime5 = datetimeList.at(4);
const datetime6 = datetimeList.at(5);
const datetime7 = datetimeList.at(6);

// get full list of stored tweets
const getTweets = () => {
    
    return [
    {
        id: 1,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
            imgAvAlt: "foto avatar 1",
            fullname: "Giorgio Garatti",
            username: "@gg98"
        },   
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
            imgAlt: "foto tweet 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec semper, magna non sollicitudin tincidunt, urna orci dapibus leo, et consequat sapien ante a dolor.",
            datetime: {
                dateISO: datetime1.dateISO,
                dateFormatted: datetime1.dateFormatted
            },
            likes: 22,
            views: 2000
        }    
    },
    {
        id: 2,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
            imgAvAlt: "foto avatar 2",
            fullname: "Elon Musk",
            username: "@ElMusk"
        },
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
            imgAlt: "foto tweet 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            datetime: {
                dateISO: datetime2.dateISO,
                dateFormatted: datetime2.dateFormatted
            },
            likes: 45,
            views: 3444
        }
    },
    {
        id: 3,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            imgAvAlt: "foto avatar 3",
            fullname: "Michelle Obama",
            username: "@FirstLady"
        },
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg",
            imgAlt: "foto tweet 3",
            text: "Donec semper, magna non sollicitudin tincidunt, urna orci dapibus leo, et consequat sapien ante a dolor.",
            datetime: {
                dateISO: datetime3.dateISO,
                dateFormatted: datetime3.dateFormatted
            },
            likes: 8,
            views: 1233
        }
    },
    {
        id: 4,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            imgAvAlt: "foto avatar 4",
            fullname: "Jhon Doe",
            username: "@jdoe"
        },
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg",
            imgAlt: "foto tweet 4",
            text: "Donec semper, magna non sollicitudin tincidunt, urna orci dapibus leo, et consequat sapien ante a dolor.",
            datetime: {
                dateISO: datetime4.dateISO,
                dateFormatted: datetime4.dateFormatted
            },
            likes: 78,
            views: 123
        }
    },
    {
        id: 5,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            imgAvAlt: "foto avatar 5",
            fullname: "Rick Dean",
            username: "@rdean"
        },
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg",
            imgAlt: "foto tweet 5",
            text: "Donec semper, magna non sollicitudin tincidunt, urna orci dapibus leo, et consequat sapien ante a dolor.",
            datetime: {
                dateISO: datetime5.dateISO,
                dateFormatted: datetime5.dateFormatted
            },
            likes: 14,
            views: 23335
        }
    },
    {
        id: 6,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            imgAvAlt: "foto avatar 6",
            fullname: "Jack Pierce",
            username: "@jp"
        },
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg",
            imgAlt: "foto tweet 6",
            text: "Donec semper, magna non sollicitudin tincidunt.",
            datetime: {
                dateISO: datetime6.dateISO,
                dateFormatted: datetime6.dateFormatted
            },
            likes: 63,
            views: 13
        }
    },
    {
        id: 7,
        user: {
            imgAvatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            imgAvAlt: "foto avatar 7",
            fullname: "Luca Bianchi",
            username: "@luca_bianchi_90"
        },
        tweetContent: {
            imgSrc: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg",
            imgAlt: "foto tweet 7",
            text: "Donec semper, magna non sollicitudin tincidunt.",
            datetime: {
                dateISO: datetime7.dateISO,
                dateFormatted: datetime7.dateFormatted
            },
            likes: 63121,
            views: 1312415
        }
    }
]};

// get tweets to render at app load
const getInitialTweets = () => {
    
    const startingTweets = getTweets().filter(tweet => {
        return tweet.id <= TWEETSTODISPLAYONSTART
    });

    return startingTweets; // [tweet1, tweet2, ...]
}

export {getTweets, getInitialTweets};