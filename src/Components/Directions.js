import React from 'react';
import './Directions.css';


class Directions extends React.Component {

   render() {

      return (
         <React.Fragment>
            <br id="4"></br>
            <div className="text-center">
               <h4 className="text-center">348 E. Main St, Lexington, KY</h4>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.1092867683901!2d-84.49247392754101!3d38.04199311562308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St!5e0!3m2!1sen!2sus!4v1571858397159!5m2!1sen!2sus" width="300px" height="300px" frameBorder="0"></iframe>
            </div>
         </React.Fragment>
      )
   }
}

export default Directions;