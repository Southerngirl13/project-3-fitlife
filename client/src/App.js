import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AssessmentForm from "./pages/AssessmentForm";

import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SignIn from "./components/SignIn";
import Recipes from "./pages/Recipes";
import Videopage from "./pages/Videopage";
import Workout from "./pages/Workout";
import Photolog from "./pages/Photolog";
import Blog from "./components/Blog";






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
         
       <Route exact path="/contact" component={Contact} /> 
       <Route exact path="/dashboard" component={Dashboard} /> 

       <Route exact path="/shop" component={Shop} /> 
       <Route exact path="/blog" component={Blog} /> 
       <Route exact path="/assessmentform" component={AssessmentForm} /> 
       <Route exact path="/recipes" component={Recipes} />
       <Route exact path="/videopage" component={Videopage} />
       <Route exact path="/workout" component={Workout} />
       <Route exact path="/photolog" component={Photolog} />
   
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
