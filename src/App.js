import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'

import Layout from "./layout/Layout";

import Home from "./components/Home";
import About from "./components/About";
import SmileGallery from "./components/SmileGallery";



function App() {
  return (
    <Layout>
        <Container>
            <Switch>
                <Route component={Home} path={'/'} exact />
                <Route component={About} path={'/about'} />
                <Route component={SmileGallery} path={'/smile-gallery'} />
            </Switch>
        </Container>
    </Layout>
  );
}

export default App;
