import { memo } from "react";

// message informing that there no more tweets to display
const NoMoreTweetsMessage = memo(function NoMoreTweetsMessage({display}) {
    // display message or nothing
    return display ? (
        <div className="nomoretweetsmessagediv">
            <p className="nomoretweetsmessage">NESSUN NUOVO TWEET</p>
        </div>
    ) : null;
});

export default NoMoreTweetsMessage;