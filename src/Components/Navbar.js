import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.navArray = [<h1>Trattoria al Trivisonno</h1>, <FontAwesomeIcon icon="utensils" />, <FontAwesomeIcon icon="clock" />, <FontAwesomeIcon icon="phone" />, <FontAwesomeIcon icon="map-marker-alt" />];
   }

   // --- Create Navigation bar with nav buttons --- //
   render() {
      let navButton = this.navArray.map((button, idx) =>
         <a key={idx} href={"#" + idx} className="btn btn-light">
            <h3>{button}</h3>
         </a>)

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
