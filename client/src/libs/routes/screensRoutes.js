import {
  DetailContainer,
  HomeSearchBarContainer,
  ResultsSearchContainer,
} from "../../containers";
import { Wrapper } from "../../components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Screens(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Wrapper>
            <Route exact path="/items" component={ResultsSearchContainer} />
            <Route exact path="/items/:id" component={DetailContainer} />
            <Route exact path="/" component={HomeSearchBarContainer} />
          </Wrapper>
        </Switch>
      </Router>
    </div>
  );
}

export default Screens;
