import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.scss";
import NavBar from "./Packages/client/NavBar/NavBar";

import Home from "./Packages/client/Home/Home";
import BusinessConsultation from "./Packages/client/BusinessConsultation/BusinessConsultation";
import Services from "./Packages/client/Services/Services";
import PodCast from "./Packages/client/PodCast/PodCast";
import Team from "./Packages/client/Team/Team";
import Marketing from "./Packages/client/Marketing/Marketing";
import Footer from "./Packages/client/Footer/Footer";
import Affiliations from "./Packages/client/Affiliations/Affiliations";
import GymGrowth from "./Packages/client/Services/gymGrowth";
import GetStarted from "./Packages/client/Affiliations/GetStarted";
import FitTechSolutions from "./Packages/client/Services/FitTechSolutions";
import StaffAugmentation from "./Packages/client/Services/StaffAugmentation";
import GymLaunch from "./Packages/client/Services/GymLaunch";
import AllTeam from "./Packages/client/Team/AllTeam";
import ChangeRequest from "./Packages/client/ChangeRequest/ChangeRequest";
import TermsOfService from "./Packages/client/Footer/TermsOfService";
import GetStartedBanner from "./Packages/client/GetStarted/GetStartedBanner";
import OurDrive from "./Packages/client/OurDrive/OurDrive";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/podcast" element={<PodCast />} />
        <Route
          exact
          path="/businessconsultation"
          element={<BusinessConsultation />}
        />
        <Route exact path="/marketing" element={<Marketing />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/gymgrowth" element={<GymGrowth />} />
        <Route
          exact
          path="/staffaugmentation"
          element={<StaffAugmentation />}
        />
        <Route exact path="/fittechsolutions" element={<FitTechSolutions />} />
        <Route exact path="/gymlaunch" element={<GymLaunch />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/allteam" element={<AllTeam />} />
        <Route exact path="/affiliations" element={<Affiliations />} />
        <Route exact path="/changerequest" element={<ChangeRequest />} />
        <Route exact path="/getstarted" element={<GetStarted />} />
        <Route exact path="/termsofservice" element={<TermsOfService />} />
        <Route exact path="/getstartedbanner" element={<GetStartedBanner />} />
        <Route exact path="/ourdrive" element={<OurDrive />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
