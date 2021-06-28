import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./Theme"
import Login from "./views/Login/Login";
import Instructor from "./views/Instructor";
import Student from "./views/Student";
import { Navbar } from './components/Navbar';
import NewActivityForm from "./components/NewActivityForm";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Navbar />
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/instructor" component={Instructor}/>
              <Route exact path="/student" component={Student}/>
              <Route exact path="/createActivity" component={NewActivityForm}/>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
