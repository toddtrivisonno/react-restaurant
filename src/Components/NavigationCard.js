import React from 'react';
import Card from './Card.js';
 

class NavigationCard extends React.Component {

   constructor(props) {
      super(props);
      this.coursesArray = ['Antipasti', 'Primi', 'Secondi', 'Formaggi', 'Dolce'];
      this.cardStyle = {
         fontFamily: "cursive",
      }
   }

   render() {
      let courseNav = this.coursesArray.map((li, idx) => <a className={"nav-item p-2"} href={"#" + li}><p>{li}</p></a>)

      return (
         <React.Fragment>
            <div className="card text-center">
               <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" style={this.cardStyle}>
                     {courseNav}
                  </ul>
               </div>
               <div className="card-body">
                  {/* <p>Starter courses. <em>Antipasto</em> literally translates to <em>before the meal</em>, which typically involves pasta.</p> */}
                  <Card />
                  
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default NavigationCard;