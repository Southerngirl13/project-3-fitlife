import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
/*import Discover from "./pages/Discover"; */
import About from "./pages/About";
import Contact from "./pages/Contact";
import KJS from "./pages/KJS";


/*import Search from "./pages/Search"; */
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./pages/Dashboard";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact={true} path='/signin' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )} />
          <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )} />
       <Route exact path="/contact" component={Contact} /> 
       <Route exact path="/kjs" component={KJS} /> 
       <Route exact path="/blog" component={Blog} /> 
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
