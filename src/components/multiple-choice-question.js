import React from 'react';

const MultipleChoiceQuestion = (
    {
        question
    }) => {

    return(
        <>
        <h4>{question.question}</h4>
        <ul className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                    <li className="list-group-item" key={choice}>
                        {choice}
                    </li>
                    )
                })
            }
        </ul>
        <h6>Your answer: </h6>
        <button className="btn btn-success">Grade</button>
        </>
    )
}

export default MultipleChoiceQuestion