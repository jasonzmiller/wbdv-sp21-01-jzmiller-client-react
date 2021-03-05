import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import CourseManager from "./components/course-manager";
import Home from "./components/home";
import CourseEditor from "./components/course-editor";


function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/"
                     exact={true}
                     component={Home}/>
              <Route path="/courses/editor"
                     exact={true}
                     render={(props => <CourseEditor {...props}/>)}/>
          </div>
        <div className="App">
          <CourseManager/>
        </div>
      </BrowserRouter>
  );
}

export default App;
