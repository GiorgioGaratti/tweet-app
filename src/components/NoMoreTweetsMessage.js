const NoMoreTweetsMessage = (props) => {
    // render message or nothing
    return props.display ? (
        <div className="nomoretweetsmessagediv">
            <p className="nomoretweetsmessage">NESSUN NUOVO TWEET</p>
        </div>
    ) : null;

}

export default NoMoreTweetsMessage;