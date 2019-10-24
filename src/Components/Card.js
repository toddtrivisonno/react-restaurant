import React from 'react';

class Card extends React.Component {

   constructor(props) {
      super(props);
      this.cardStyle = {
         border: "none"
      }
   }

   render() {
      const { menuItem = {} } = this.props;
      
      return (
         <React.Fragment>
            <br></br>
            <h3 className="fontQ">{menuItem.item_name}</h3>
            <h5 className="fontQ">{menuItem.description}.......{menuItem.price}</h5> 
         </React.Fragment>
      )
   }
}

export default Card;
