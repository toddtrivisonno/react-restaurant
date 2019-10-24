import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

   notify = () => toast(<img src="maitreD.gif" />, {
      position: toast.POSITION.TOP_LEFT
   });

   render() {
      return (
         <React.Fragment>
            <div id="jumbotron" className="jumbotron jumbotron-fluid" style={this.sectionStyle}>
               {this.props.isHeader == "true" &&
                  <button className="btn btn-light btn-sm fontQ reservationButton" onClick={this.notify}>
                     <ToastContainer />
                     Make A Reservation
                  </button>
               }
            </div>
         </React.Fragment>
      )
   }
}

export default Jumbotron;
