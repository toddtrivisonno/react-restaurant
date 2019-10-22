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


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
  }

  async getDescription() {
    const axios = require('axios');

    const response = await axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
    console.log(response)
    this.setState({
      content: response
    })
  }

  componentDidMount() {
    this.getDescription();
  }

  render() {
    console.log(this.state.content);
    const descriptions = this.state.content ? this.state.content.data.menu_items : null;

    return this.state.content ? (
      <div className="App">
        <Navbar />
        <Jumbotron jumboImg="trattoria.png" />
        <NavigationCard description={descriptions[0].description} />
      </div>
    ) : 
    <div>Loading...</div>;
  }
}


export default App;
