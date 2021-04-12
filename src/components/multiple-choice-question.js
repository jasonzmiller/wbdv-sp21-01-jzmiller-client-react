import React, { useState } from 'react';

const MultipleChoiceQuestion = (
    {
        question
    }) => {

    const [cachedAnswer, setCachedAnswer] = useState("")
    const [answered, setAnswered] = useState(false)

    return(
        <>
        <span>
        <h4>{question.question}</h4>
        {
            answered &&
            <i className={`fas fa-2x webb-float-right ${cachedAnswer === question.correct ? "fa-check" : "fa-times"}`}></i>
        }
        </span>
        <ul className="list-group">
            {
                question.choices.map((choice) => 
                <>
                    {
                        answered && cachedAnswer === choice && cachedAnswer !== "" &&
                        <li className={`list-group-item ${choice === question.correct ? 'webb-success' : 'webb-error'} `} key={choice}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name="question"></input>
                            <label className="webb-margin-left" for={choice}>{choice}</label>
                            <i className={`fas fa-2x webb-float-right ${choice === question.correct ? "fa-check" : "fa-times"}`}></i>
                        </li>
                    }
                    {
                        answered && cachedAnswer !== choice && cachedAnswer !== "" &&
                        <li className={`list-group-item ${choice === question.correct ? 'webb-success' : 'webb-error'} `} key={choice}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name="question"></input>
                            <label className="webb-margin-left" for={choice}>{choice}</label>
                            <i className={`fas fa-2x webb-float-right ${choice === question.correct ? "fa-check" : "fa-times"}`}></i>
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

export default MultipleChoiceQuestion