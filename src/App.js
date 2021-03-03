import {BrowserRouter} from 'react-router-dom';
import './App.css';
import CourseManager from "./components/course-manager";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <CourseManager/>
        </div>
      </BrowserRouter>
  );
}

export default App;
