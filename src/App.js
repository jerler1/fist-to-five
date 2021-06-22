import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./Theme"
import Login from "./views/Login";
import Instructor from "./views/Instructor";
import Student from "./views/Student";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/login"><Login /></Route>
              <Route exact path="/instructor"><Instructor /></Route>
              <Route exact path="/student"><Student /></Route>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
