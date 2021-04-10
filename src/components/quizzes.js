import React , { useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import quizService from '../services/quiz-service';


const Quizzes = (
    {
        quizzes=[],
        findAllQuizzes
    }) => {
        
        const { courseId } = useParams();

        useEffect(() => {
            findAllQuizzes()
        }, [])

        return(
            <>
            <div>
                <h1>Quizzes</h1>
                <ul className="list-group">
                    {
                        quizzes.map((quiz) => {
                            return(
                                <li className="list-group-item">
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        {quiz.title}
                                    </Link>
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
    quizzes: state.quizzesReducer.quizzes
});

const dtpm = ( dispatch ) => ({
    findAllQuizzes: () => {
        quizService.findAllQuizzes()
        .then(quizzes => dispatch({
            type: "FIND_ALL_QUIZZES",
            quizzes
        }))
    }
});

export default connect ( stpm , dtpm ) ( Quizzes )