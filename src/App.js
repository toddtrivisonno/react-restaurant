import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Components/Card.js';
import Navbar from './Components/Navbar.js';
import NavigationCard from './Components/NavigationCard.js'
import Jumbotron from './Components/Jumbotron'


library.add(fab, faMapMarkerAlt, faUtensils, faClock, faPhone);


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron jumboImg="trattoria.png"/>
      <NavigationCard />
    </div>
  );
}

export default App;
