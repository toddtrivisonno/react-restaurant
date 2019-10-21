import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css";

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.navArray = [<h1>Trattoria al Trivisonno</h1>, <FontAwesomeIcon icon="map-marker-alt" />, <FontAwesomeIcon icon="clock" />, <FontAwesomeIcon icon="phone" />, <FontAwesomeIcon icon="utensils" />];
   }

   render() {
      let navButton = this.navArray.map((button, idx) => <a href={"#" + button} className="btn btn-light"><h3>{button}</h3></a>)

      return (
         <React.Fragment>
            <nav className="navbar bg-light" id="navbar">
               {navButton}
            </nav>
         </React.Fragment>
      )

   }
}

export default Navbar;
