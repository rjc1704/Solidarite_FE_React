import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} render={() => <MainPage />} />
        <Route path={"/detail"} render={() => <DetailPage />} />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
