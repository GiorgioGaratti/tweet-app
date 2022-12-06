import createDate from "../lib/createDate";

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
            datetime: createDate(),
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
            datetime: createDate(),
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
            datetime: createDate(),
            likes: 8,
            views: 1233
        }
    }
]};

export default getTweets;