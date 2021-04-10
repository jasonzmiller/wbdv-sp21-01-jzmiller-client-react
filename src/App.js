import {BrowserRouter, Route, useParams, Link} from 'react-router-dom';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import './App.css';
import moduleReducer from "./reducers/modules-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import widgetReducer from "./reducers/widget-reducer";
import quizzesReducer from "./reducers/quizzes-reducer";
import questionReducer from "./reducers/question-reducer"
import CourseManager from "./components/course-manager";
import Home from "./components/home";
import CourseEditor from "./components/course-editor";
import Quizzes from './components/quizzes';
import Quiz from './components/quiz';

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer,
  widgetReducer,
  quizzesReducer,
  questionReducer
})

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid">
            <Route 
                path="/"
                exact={true}
                component={Home}
            />

            <Route 
                path="/courses"
                component={CourseManager}
            />

            <Route
                path="/courses/:courseId/quizzes"
                exact={true}
                component={Quizzes}
            />

            <Route
                path="/courses/:courseId/quizzes/:quizId"
                exact={true}
                component={Quiz}
            />

            <Route 
                path=
                    {[
                      "/courses/:layout/edit/:courseId/",
                      "/courses/:layout/edit/:courseId/modules/:moduleId",
                      "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                      "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                      "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                    ]}
                exact={true}
                render={(props => <CourseEditor {...props}/>)}
            />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
