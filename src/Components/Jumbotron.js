import React from 'react';
import './Jumbotron.css';


class Jumbotron extends React.Component {

   constructor(props) {
      super(props);
      this.sectionStyle = {
         backgroundImage: `url(${props.jumboImg})`,
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
      }

   }

   handleClick() {
      console.log('click')
   }

   render() {
      return (
         <React.Fragment>
            <div id="jumbotron" className="jumbotron jumbotron-fluid" style={this.sectionStyle}>
               {this.props.isHeader == "true" &&
                  <button className="btn btn-light btn-sm" id="reservationButton" onClick={this.handleClick}>
                     Make A Reservation
                  </button>}
            </div>
         </React.Fragment>
      )

   }


}

export default Jumbotron;