
import './App.css';
import { Switch, Route} from "react-router-dom";

import NavBar from "./components/header/NavBar";
import HomePage from "./pages/homepage/HomePage";
import AboutMePage from "./pages/aboutme/AboutMePage";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
      <header className="App-header">



          <Route path='/about'>
              <AboutMePage/>
          </Route>

          <Route exact path='/'>
              <HomePage />
          </Route>

      </header>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
