import React , { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import questionService from '../services/question-service';
import quizService from '../services/quiz-service';
import TrueFalseQuestion from './true-false-question';
import MultipleChoiceQuestion from './multiple-choice-question';

const Quiz = (
    {
        questions=[],
        findQuestionsForQuiz,
        submitQuiz
    }
) => {

    const { quizId } = useParams();

    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])

    const [numberCorrect, setNumberCorrect] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [answers, setAnswers] = useState([])

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
                                        numberCorrect={numberCorrect}
                                        setNumberCorrect={setNumberCorrect}
                                        answers={answers}
                                        setAnswers={setAnswers}
                                    />
                                }
                                {
                                    question.type === "MULTIPLE_CHOICE" &&
                                    <MultipleChoiceQuestion
                                        question={question}
                                        numberCorrect = {numberCorrect}
                                        setNumberCorrect = {setNumberCorrect}
                                        answers={answers}
                                        setAnswers={setAnswers}
                                    />
                                }
                            </li>
                        )
                    })
                }
            </ul>
            {
                !submitted &&
                <button onClick={() => {
                    setSubmitted(true)
                    submitQuiz(quizId, answers)
                }} className="btn btn-success">Submit</button>
            }
            {
                submitted &&
                <h4>Score: {Math.round(numberCorrect * 100 / questions.length)}%</h4>
            }
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
    },
    submitQuiz: (quizId, questions) => quizService.submitQuiz(quizId, questions)
});

export default connect ( stpm , dtpm ) ( Quiz )