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
import ServicesEndodontics from './components/ServicesEndodontics';
import ServicesGeneralDentistry from './components/ServicesGeneralDentistry';
import ServicesPediatric from './components/ServicesPediatric';
import ServicesOrthodontics from './components/ServicesOrthodontics';
import ServicesPeriodontics from './components/ServicesPeriodontics';
import ServicesOralSurgery from './components/ServicesOralSurgery';
import ServicesRestorative from './components/ServicesRestorative';
import ScrollToTop from "./utilities/ScrollToTop";


function App() {
  return (
    <Layout>
        <Container>
            <ScrollToTop>
                <Switch>
                    <Route component={Home} path={'/'} exact />

                    <Route component={About} path={'/about-us'} exact />
                    <Route component={MeetTheTeam} path={'/about-us/meet-the-team'} exact/>
                    <Route component={SingleDoctorPage} path={'/about-us/meet-the-team/:slug'} />
                    <Route component={OurTechnology} path={'/about-us/our-technology'} exact/>
                    {/*<Route component={SingleTechPage} path={'/about-us/our-technology/:slug'} />*/}


                    <Route component={PatientInfo} path={'/patient-info'} exact/>
                    <Route component={CovidPage} path={'/patient-info/covid-safety'} exact />
                    <Route component={InsurancePage} path={'/patient-info/insurance'} exact />

                    <Route component={SmileGallery} path={'/smile-gallery'} />
                    <Route component={SingleSmile} path={'/smile-gallery/:slug'} />

                    <Route component={ContactUs} path={'/contact-us'} />


                    <Route component={Services} path={'/services'} exact/>
                    <Route component={ServicesCosmetic} path={'/services/cosmetic-dentistry'} exact/>
                    <Route component={ServicesEndodontics} path={'/services/endodontics'} exact/>
                    <Route component={ServicesGeneralDentistry} path={'/services/general-dentistry'} exact/>
                    <Route component={ServicesPediatric} path={'/services/pediatric-dentistry'} exact/>
                    <Route component={ServicesOrthodontics} path={'/services/orthodontics'} exact/>
                    <Route component={ServicesPeriodontics} path={'/services/periodontics'} exact/>
                    <Route component={ServicesOralSurgery} path={'/services/oral-surgery'} exact/>
                    <Route component={ServicesRestorative} path={'/services/restorative-dentistry'} exact/>
                </Switch>
            </ScrollToTop>
        </Container>
    </Layout>
  );
}

export default App;
