import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SmileGallery from "./components/SmileGallery";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path={'/'} exact />
        <Route component={About} path={'/about'} />
        <Route component={SmileGallery} path={'/smile-gallery'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
