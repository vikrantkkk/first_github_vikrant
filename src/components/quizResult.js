
export default function Quizresult(props){
    return(
        <>
        <div className="show-score">
            Your score : {props.score}<br/>
            Total score: {props.totalScore}
        </div>
        <button id="next-button" onClick={props.tryAgain}>Try Again</button>
        </>
    )
}