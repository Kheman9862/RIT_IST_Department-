import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Background from "./components/background/background";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section from "./main/Section";
import FacultyList from "./components/People/Faculty/FacultyList/FacultyList";
import StaffList from "./components/People/Staff/StaffList/StaffList";
import ResearchInterest from "./components/Research/ResearchInterest/ResearchInterest";
import ResearchFaculty from "./components/Research/ResearchFaculty/ResearchFaculty";
import Footer from "./components/Footer/Footer";
import Courses from "./Courses/Courses";

/**
 *
 * This is the entry point of the components and the main app file.
 *
 * In this you will see that i am calling the components that are seperated by routing and based on the url path it will go to that components.
 * Each route will be loaded on visiting the url,this is also called lazy loading which is pretty popular in spa as it saves uncessary api calls.
 *
 * For the simplicity of this website i have kept most of the links in one page but there are some components that are rendered in a different routes.
 *
 * One interesting route among below routes is /courses/:id which is making the url dynamic based on the degree id and i am using that id to match with the list of courses i have similar to that degree and return the list.
 *
 * */

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
          <Background></Background>
          <Routes>
            <Route exact path="/" element={<Section />} />
            <Route exact path="/faculty" element={<FacultyList />} />
            <Route exact path="/staff" element={<StaffList />} />
            <Route
              exact
              path="/researchInterest"
              element={<ResearchInterest />}
            />
            <Route
              exact
              path="/researchFaculty"
              element={<ResearchFaculty />}
            />
            <Route exact path="/courses/:id" element={<Courses />} />
          </Routes>
          <Footer></Footer>
        </header>
      </div>
    </Router>
  );
}

export default App;
