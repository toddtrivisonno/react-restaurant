import React from 'react';
import MenuNames from '../Menu.json';


class Card extends React.Component {

   constructor(props) {
      super(props);
      this.cardStyle = {
         fontFamily: "cursive",
         border: "none"
      }

   }

   render() {
      const { menuItem = {} } = this.props;
      
      return (
         <React.Fragment>
            <br></br>
            <h3>{menuItem.item_name}</h3>
            <h4>{menuItem.price}</h4>
            <h5>{menuItem.description}</h5>
         </React.Fragment>
      )
   }
}

export default Card;