import React, { useState } from 'react';

const TrueFalseQuestion = (
    {
        question,
        choices=["true", "false"]
    }) => {
    
    const [cachedAnswer, setCachedAnswer] = useState("")
    const [answered, setAnswered] = useState(false)

    return(
        <>
        <span>
        <h4>{question.question}</h4>
        {
            answered &&
            <i className={`fas fa-pull-right ${cachedAnswer === question.correct ? "fa-check" : "fa-times"}`}></i>
        }
        </span>
        <ul className="list-group">
            {
                choices.map((choice) =>
                    <>
                    {
                        answered && cachedAnswer === choice &&
                        <li className={`list-group-item ${choice === question.correct ? 'webb-success' : 'webb-error'} `} key={choice}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name="question"></input>
                            <label className="webb-margin-left" for={choice}>{choice}</label>
                            <i className={`fas ${choice === question.correct ? "fa-check" : "fa-times"}`}></i>
                        </li>
                    }
                    {
                        answered && cachedAnswer !== choice &&
                        <li className={`list-group-item ${choice === question.correct ? 'webb-success' : 'webb-error'} `} key={choice}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name="question"></input>
                            <label className="webb-margin-left" for={choice}>{choice}</label>
                            <i className={`fas ${choice === question.correct ? "fa-check" : "fa-times"}`}></i>
                        </li>
                    }
                    {
                        !answered &&
                        <li className="list-group-item" key={choice}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name="question"></input>
                            <label className="webb-margin-left" for={choice}>{choice}</label>
                        </li>
                    }
                    </>
                )
            }
        </ul>
        {
            answered &&
            <h6>Your answer: {cachedAnswer}</h6>
        }
        <button onClick={() => setAnswered(true)} className="btn btn-success">Grade</button>
        </>
    )
}

export default TrueFalseQuestion