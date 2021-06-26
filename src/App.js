import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./Theme"
import Login from "./views/Login/Login";
import Instructor from "./views/Instructor";
import Student from "./views/Student";
import CreateInstructor from "./views/CreateInstructor/CreateInstructor";
import StudentActivityCard from './components/StudentActivityCard';
import InstructorActivityCard from './components/InstructorActivityCard';
import { Navbar } from './components/Navbar';
import ActivityForm from './components/ActivityForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Navbar />
        {/* <ActivityForm/> */}
            <Switch>
            {/* <Student /> */}
            {/* <Instructor/> */}
              <Route exact path="/" component={Login}/>
              <Route exact path="/instructor" component={Instructor}/>
              <Route exact path="/student" component={Student}/>
              <Route exact path="/createActivity" component={ActivityForm}/>
              <Route exact path="/instructor/create" component={CreateInstructor}/>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
