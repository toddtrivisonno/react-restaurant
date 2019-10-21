import React from 'react';

class Card extends React.Component {

   constructor(props) {
      super(props);
      this.cardStyle = {
         fontFamily: "cursive",
      }

   }

   render() {
      return (
         <React.Fragment>
            <div className="card" style={this.cardStyle}>
               <div className="card-body">
                  <h5 className="card-title">Antipasti</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Prosciutto e melone</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default Card;