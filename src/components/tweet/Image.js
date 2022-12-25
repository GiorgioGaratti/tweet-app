import { memo } from "react";

const Image = memo(function Image(props){
    return (
        <div>
            <img className="image" src={props.tweetContent.imgSrc} alt={props.tweetContent.imgAlt}></img>
        </div>);
});

export default Image;