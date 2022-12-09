const NoMoreTweetsMessage = (props) => {
    // render message or nothing
    return props.display ? (
        <div className="nomoretweetsmessagediv">
            <p className="nomoretweetsmessage">NON CI SONO PIU' TWEET DA MOSTRARE</p>
        </div>
    ) : null;

}

export default NoMoreTweetsMessage;