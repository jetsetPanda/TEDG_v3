import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'
import './App.css';
import Layout from "./layout/Layout";

import Home from "./components/Home";
import About from "./components/About";
import SmileGallery from "./components/SmileGallery";
import SingleSmile from "./components/SingleSmile";
import PatientInfo from "./components/PatientInfo";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import MeetTheTeam from "./components/MeetTheTeam";
import OurTechnology from "./components/OurTechnology";


function App() {
  return (
    <Layout>
        <Container>
            <Switch>
                <Route component={Home} path={'/'} exact />
                <Route component={About} path={'/about-us'} />
                <Route component={MeetTheTeam} path={'/meet-the-team'} />
                <Route component={OurTechnology} path={'/our-technology'} />
                <Route component={PatientInfo} path={'/patient-info'} />
                <Route component={SingleSmile} path={'/smile-gallery/:slug'} />
                <Route component={ContactUs} path={'/contact-us'} />
                <Route component={Services} path={'/services'} />
                <Route component={SmileGallery} path={'/smile-gallery'} />
            </Switch>
        </Container>
    </Layout>
  );
}

export default App;
