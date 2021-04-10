import React , { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import questionService from '../services/question-service';
import TrueFalseQuestion from './true-false-question';
import MultipleChoiceQuestion from './multiple-choice-question';

const Quiz = (
    {
        questions=[],
        findQuestionsForQuiz
    }
) => {

    const { quizId } = useParams();

    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])

    return(
        <>
        <div>
            <h1>Quiz {quizId}</h1>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item" key={question._id}>
                                {
                                    question.type === "TRUE_FALSE" &&
                                    <TrueFalseQuestion
                                        question={question}
                                    />
                                }
                                {
                                    question.type === "MULTIPLE_CHOICE" &&
                                    <MultipleChoiceQuestion
                                        question={question}
                                    />
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}

const stpm = ( state ) => ({
    questions: state.questionReducer.questions
});

const dtpm = ( dispatch ) => ({
    findQuestionsForQuiz: (quizId) => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => dispatch({
                type: "FIND_QUESTIONS_FOR_QUIZ",
                questions
            }))
    }
});

export default connect ( stpm , dtpm ) ( Quiz )