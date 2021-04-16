import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("./pages"));

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
