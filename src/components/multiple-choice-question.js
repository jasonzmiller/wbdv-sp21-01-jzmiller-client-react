import React, { useState } from 'react';

const MultipleChoiceQuestion = (
    {
        question,
        numberCorrect,
        setNumberCorrect,
        answers,
        setAnswers
    }) => {

    const [cachedAnswer, setCachedAnswer] = useState("")
    const [isAnswered, setIsAnswered] = useState(false)

    return(
        <>
        <span>
        <h4>{question.question}</h4>
        {
            isAnswered &&
            <i className={`fas fa-2x webb-float-right ${cachedAnswer === question.correct ? "fa-check" : "fa-times"}`}></i>
        }
        </span>
        <ul className="list-group">
            {
                question.choices.map((choice) => 
                <>
                    {
                        isAnswered && cachedAnswer === choice && cachedAnswer !== "" &&
                        <li className={`list-group-item ${choice === question.correct ? 'webb-success' : 'webb-error'} `} key={`${question.question}.${choice}`}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name={question.question}></input>
                            <label className="webb-margin-left" htmlFor={choice}>{choice}</label>
                            <i className={`fas fa-2x webb-float-right ${choice === question.correct ? "fa-check" : "fa-times"}`}></i>
                        </li>
                    }
                    {
                        isAnswered && cachedAnswer !== choice && cachedAnswer !== "" &&
                        <li className={`list-group-item ${choice === question.correct ? 'webb-success' : 'webb-error'} `} key={`${question.question}.${choice}`}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name={question.question}></input>
                            <label className="webb-margin-left" htmlFor={choice}>{choice}</label>
                            <i className={`fas fa-2x webb-float-right ${choice === question.correct ? "fa-check" : "fa-times"}`}></i>
                        </li>
                    }
                    {
                        !isAnswered &&
                        <li className="list-group-item" key={`${question.question}.${choice}`}>
                            <input onClick={(e) => setCachedAnswer(e.target.id)} type="radio" id={choice} name={question.question}></input>
                            <label className="webb-margin-left" htmlFor={choice}>{choice}</label>
                        </li>
                    }
                </>
                )
            }
        </ul>
        {
            isAnswered &&
            <h6>Your answer: {cachedAnswer}</h6>
        }
        {
            !isAnswered &&
            <button onClick={() => {
                setAnswers([...answers, {...question, answer: cachedAnswer}])
                cachedAnswer === question.correct ? setNumberCorrect(numberCorrect + 1) : setNumberCorrect(numberCorrect)
                setIsAnswered(true)
                }} className="btn btn-success">Grade</button>
        }
        </>
    )
}

export default MultipleChoiceQuestion