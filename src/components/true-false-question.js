import React from 'react';

const TrueFalseQuestion = (
    {
        question,
        choices=["True", "False"]
    }) => {

    return(
        <>
        <h4>{question.question}</h4>
        <ul className="list-group">
            {
                choices.map((choice) => {
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

export default TrueFalseQuestion