import React from 'react';
import Card from './Card.js';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import './NavigationCard.css';


class NavigationCard extends React.Component {

   constructor(props) {
      super(props);
      this.cardStyle = {
         // fontFamily: "cursive",
      }

   }

   createTab(label) {
      let cards =
         this.props.menuItems
            .filter(item => item.course === label.toLowerCase())
            .map((item) => {
               return <Card key={item.item_name} menuItem={item} />
            })

      return (
         <Tab key={label} label={label}>
            {cards}
         </Tab>
      )
   }

   render() {
      return (
         <React.Fragment>
            <hr></hr>
            <h1 className="text-center">Menu</h1>
            <Tabs style={this.cardStyle} onSelect={(index, label) => console.log(label + ' selected')}>
               {this.createTab('Antipasti')}
               {this.createTab('Primi')}
               {this.createTab('Secondi')}
               {this.createTab('Formaggi')}
               {this.createTab('Dolce')}
            </Tabs>
            <hr></hr>

         </React.Fragment>
      )
   }
}

export default NavigationCard;