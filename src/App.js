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
import MenuNames from './Menu.json';


library.add(fab, faMapMarkerAlt, faUtensils, faClock, faPhone);


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: MenuNames.menu_names
    }
  }

  async getDescription() {
    const axios = require('axios');

    const response = await axios.get('https://entree-f18.herokuapp.com/v1/menu/15')
    let fullMenu =  this.state.content.map((item, idx) => {
      item['description'] = response.data.menu_items[idx].description;
      return item;
    })

    this.setState({
      content: fullMenu
    })
  }

  componentDidMount() {
    this.getDescription();
  }

  render() {
    return this.state.content ? (
      <div className="App">
        <Navbar />
        <Jumbotron jumboImg="trattoria.png" />
        <NavigationCard menuItems={this.state.content} />
      </div>
    ) :
      <div class="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
  }
}


export default App;
