import React from 'react';
import {useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId} = useParams();

    return (
        <Provider store={store}>
            <div>
                <i onClick={() => history.goBack()}
                   className="fas fa-arrow-left fa-2x webb-margin"></i>
                <h2>Course Editor</h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}




    // <Provider provide={store}>
    //     <div>
    //         <h2>
    //             Course Editor
    //         </h2>
    //         <ModuleList/>
    //         <div>
    //             <div className="webb-sticky-top">
    //                 <div className="row">
    //                     <div className="col-1">
    //                         <i onClick={() => history.goBack()}
    //                            className="fas fa-arrow-left fa-2x webb-margin"></i>
    //                     </div>
    //                     <div className="col-2">
    //                         <h4 className="webb-azure">CS5610</h4>
    //                     </div>
    //                     <div className="col-8">
    //                         <ul className="nav nav-pills nav-fill">
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Build</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link active webb-pill-active-border" aria-current="page" href="#">Pages</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Theme</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Store</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Apps</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Settings</a>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                     <div className="col-1">
    //                         <i className="fa fa-plus fa-2x" />
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="container webb-padding-top-70px">
    //                 <div className="row">
    //                     <div className="col-4">
    //                         <ul className="list-group">
    //                             <li className="list-group-item active">
    //                                 Module 1 - jQuery
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                             <li className="list-group-item webb-lg-color">
    //                                 Module 2 - React
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                             <li className="list-group-item webb-lg-color">
    //                                 Module 3 - Redux
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                             <li className="list-group-item webb-lg-color">
    //                                 Module 4 - Native
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                             <li className="list-group-item webb-lg-color">
    //                                 Module 5 - Angular
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                             <li className="list-group-item webb-lg-color">
    //                                 Module 6 - Node
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                             <li className="list-group-item webb-lg-color">
    //                                 Module 7 - Mongo
    //                                 <a className="webb-azure" href="#" title="delete module">
    //                                     <i className="pull-right fa fa-trash" />
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                         <br />
    //                         <a href="#" title="new module" className="webb-black">
    //                             <i className="pull-right fa fa-plus fa-2x" />
    //                         </a>
    //                     </div>
    //                     <div className="col-8">
    //                         <ul className="nav nav-pills nav-fill">
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Topic 1</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link active webb-pill-active-border" aria-current="page" href="#">Topic 2</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Topic 3</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">Topic 4</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link webb-pill-color" href="#">
    //                                     <i className="fa fa-plus" />
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                         <br />
    //                         <a href="#" className="btn btn-success pull-right">
    //                             Save
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </Provider>


export default CourseEditor