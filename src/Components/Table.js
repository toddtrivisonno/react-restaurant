import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Table extends React.Component {

   render() {
      return (
         <React.Fragment>
            <div className="card-group">
               <div className="card">
                  <div className="card-body">
                     <h1 className="text-center">Hours</h1>
                     <table className="table text-center fontQ">
                        <tbody>
                           <tr>
                              <th scope="row">Sunday</th>
                              <td>6pm - 11pm</td>
                           </tr>
                           <tr>
                              <th scope="row">Monday</th>
                              <td>Closed</td>
                           </tr>
                           <tr>
                              <th scope="row">Tuesday</th>
                              <td>Closed</td>
                           </tr>
                           <tr>
                              <th scope="row">Wednesday</th>
                              <td>6pm - 12am</td>
                           </tr>
                           <tr>
                              <th scope="row">Thursday</th>
                              <td>6pm - 12am</td>
                           </tr>
                           <tr>
                              <th scope="row">Friday</th>
                              <td>6pm - 12am</td>
                           </tr>
                           <tr>
                              <th scope="row">Saturday</th>
                              <td>6pm - 12am</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div className="card" id="3">
                  <div className="card-body text-center" id="contactCard">
                     <h1>Contact Us</h1>
                     <img src="letterT.png" width="100px" className="m-4" />
                     <h3 className="fontQ"><FontAwesomeIcon icon="phone" /> 859.960.4600</h3>
                     <h3 className="fontQ"><FontAwesomeIcon icon="envelope" /> info@awesomeinc.org</h3>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default Table;
