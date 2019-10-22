import React from 'react';
import Card from './Card.js';
import { Tabs, Tab } from 'react-bootstrap-tabs';



class NavigationCard extends React.Component {

   constructor(props) {
      super(props);
      this.coursesArray = ['Antipasti', 'Primi', 'Secondi', 'Formaggi', 'Dolce'];
      this.cardStyle = {
         fontFamily: "cursive"
      }
   }

   render() {
      // let courseNav = this.coursesArray.map((li, idx) => <a className={"nav-item p-2"} data-toggle="tab" href={"#" + li}><p>{li}</p></a>)

      return (
         <React.Fragment>
            {/* <div className="card text-center">
               <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" style={this.cardStyle}>
                     {courseNav}
                  </ul>
               </div>
            </div> */}

            <Tabs style={this.cardStyle} onSelect={(index, label) => console.log(label + ' selected')}>
               <Tab label="Antipasti"><Card /></Tab>
               <Tab label="Primi">Primooo</Tab>
               <Tab label="Secondi">Secondoooo</Tab>
               <Tab label="Formaggi">CHEEEZ</Tab>
               <Tab label="Dolce">Sweetz</Tab>
            </Tabs>

         </React.Fragment>
      )
   }
}

export default NavigationCard;