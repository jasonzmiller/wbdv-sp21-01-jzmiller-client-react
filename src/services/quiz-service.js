const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

export const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json())

const api = {
    findAllQuizzes
}

export default api