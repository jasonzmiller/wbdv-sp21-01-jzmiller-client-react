import React from 'react';
import {useParams, Link} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import widgetReducer from "../reducers/widget-reducer";
import quizzesReducer from "../reducers/quizzes-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../course-editor/widgets/widget-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer,
    widgetReducer,
    quizzesReducer
})

const store = createStore(reducer)

const CourseEditor = () => {

    const {layout, topicId} = useParams();

    return (
        <div>
            <h2>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left webb-margin"></i>
                </Link>
                Web Dev Selected Course
            </h2>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9"> 
                    <LessonTabs/>
                    <TopicPills/>
                    {
                        topicId !== "undefined" && typeof topicId !== "undefined" &&
                        <WidgetList/>
                    }
                </div>
            </div>
        </div>
        // <Provider store={store}>
        //     <div>
        //         <h2>
        //             <Link to={`/courses/${layout}`}>
        //                 <i className="fas fa-arrow-left webb-margin"></i>
        //             </Link>
        //             Web Dev Selected Course
        //         </h2>
        //         <div className="row">
        //             <div className="col-3">
        //                 <ModuleList/>
        //             </div>
        //             <div className="col-9"> 
        //                 <LessonTabs/>
        //                 <TopicPills/>
        //                 {
        //                     topicId !== "undefined" && typeof topicId !== "undefined" &&
        //                     <WidgetList/>
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </Provider>
    )
}


export default CourseEditor