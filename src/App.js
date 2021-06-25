import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./Theme"
import Login from "./views/Login/Login";
import Instructor from "./views/Instructor";
import Student from "./views/Student";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/instructor" component={Instructor}/>
              <Route exact path="/student" component={Student}/>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
