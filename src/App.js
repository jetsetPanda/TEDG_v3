import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'

import Layout from "./layout/Layout";

import Home from "./components/Home";
import About from "./components/About";
import SmileGallery from "./components/SmileGallery";
import SingleSmile from "./components/SingleSmile";
import NewPatients from "./components/NewPatients";
import Faq from "./components/FAQ";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import OurTechnology from "./components/OurTechnology";


function App() {
  return (
    <Layout>
        <Container>
            <Switch>
                <Route component={Home} path={'/'} exact />
                <Route component={About} path={'/about'} />
                <Route component={OurTeam} path={'/meet-the-team'} />
                <Route component={OurTechnology} path={'our-technology'} />
                <Route component={NewPatients} path={'/new-patients'} />
                <Route component={SingleSmile} path={'/smile-gallery/:slug'} />
                <Route component={Faq} path={'/faq'} />
                <Route component={Services} path={'/services'} />
                <Route component={SmileGallery} path={'/smile-gallery'} />
            </Switch>
        </Container>
    </Layout>
  );
}

export default App;
