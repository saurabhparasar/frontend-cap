import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import AvailableCard from "./components/Cards/AvailableCard";
import MyBids from "./components/BuilderDashboard/MyBids";

import Navbar from "./components/Navbar";
import User from "./components/Login/User";
import Login from "./components/Login/Login";
import Builder from "./components/Login/Builder";
import ImageSlider from "./components/HomeSlider/ImageSlider";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Login/Signup";
import Services from "./components/Services/Services";

import UserDashboard from "./components/UserDashboard/UserDashboard";
import UsrPrfl from "./components/UserDashboard/UsrPrfl";
import Projects from "./components/UserDashboard/Projects";
import Post from "./components/UserDashboard/Post";
import Notifications from "./components/UserDashboard/Notifications";
import Chats from "./components/UserDashboard/Chats";

import BuilderDashboard from "./components/BuilderDashboard/BuilderDashboard";
import BuilderProfile from "./components/BuilderDashboard/BuilderProfile";
import Available from "./components/BuilderDashboard/Available";
// import MyBids from "./components/BuilderDashboard/MyBids";

const App = () => {
  return (
    <div className="cap-body">
      <Router>
        {/* NavBar */}
        <Navbar />
        <Route exact path="/home" component={ImageSlider}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/user" component={User}></Route>
        <Route exact path="/builder" component={Builder}></Route>

        {/* User Dashboard */}
        <Route exact path="/userdashboard" component={UserDashboard} />
        <Route exact path="/usrprfl" component={UsrPrfl} />
        <Route exact path="/Uprojects" component={Projects} />
        <Route exact path="/Upost" component={Post} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/chats" component={Chats} />

        {/* Builder Dashboard */}
        <Route exact path="/builderdashboard" component={BuilderDashboard} />
        <Route exact path="/builderprofile" component={BuilderProfile} />
        <Route exact path="/Bprojects" component={MyBids} />
        <Route exact path="/Bpost" component={Available} />
        <Route exact path="/Bnotifications" component={Notifications} />
        <Route exact path="/Bchats" component={Chats} />

        <Services />
        <Testimonials />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
// const App = () => {
//   return (
//     <div>
//       <AvailableCard />
//       <AvailableCard />
//       <AvailableCard />
//       <AvailableCard />
//       <AvailableCard />
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <div>
//       <MyBids />
//     </div>
//   );
// };

// export default App;
