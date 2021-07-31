import {
  DetailContainer,
  HomeSearchBarContainer,
  ResultsSearchContainer,
} from "../../containers";
import { Route, Switch } from "wouter";
function Screens(props) {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomeSearchBarContainer} />
        <Route path="/search" component={ResultsSearchContainer} />
        <Route path="/detail" component={DetailContainer} />
      </Switch>
    </div>
  );
}

export default Screens;
