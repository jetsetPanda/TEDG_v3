import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'
import './App.css';
import Layout from "./layout/Layout";

import Home from "./components/Home";
import About from "./components/About";
import SmileGallery from "./components/SmileGallery";
import SingleSmile from "./components/SingleSmile";
import SingleDoctorPage from "./components/SingleDoctorPage";
import PatientInfo from "./components/PatientInfo";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import MeetTheTeam from "./components/MeetTheTeam";
import OurTechnology from "./components/OurTechnology";
import CovidPage from "./components/CovidPage";
import InsurancePage from "./components/InsurancePage";

import ServicesCosmetic from "./components/ServicesCosmetic";

function App() {
  return (
    <Layout>
        <Container>
            <Switch>
                <Route component={Home} path={'/'} exact />
                <Route component={About} path={'/about-us'} exact />
                <Route component={MeetTheTeam} path={'/about-us/meet-the-team'} exact/>
                <Route component={Services} path={'/services'} exact/>
                <Route component={OurTechnology} path={'/our-technology'} />
                <Route component={PatientInfo} path={'/patient-info'} exact/>
                <Route component={CovidPage} path={'/patient-info/covid-safety'} exact />
                <Route component={InsurancePage} path={'/patient-info/insurance'} exact />
                <Route component={SingleSmile} path={'/smile-gallery/:slug'} />
                <Route component={ContactUs} path={'/contact-us'} />
                <Route component={SmileGallery} path={'/smile-gallery'} />
                <Route component={SingleDoctorPage} path={'/about-us/meet-the-team/:slug'} />
                <Route component={ServicesCosmetic} path={'/services/cosmetic-dentistry'} exact/>

            </Switch>
        </Container>
    </Layout>
  );
}

export default App;
