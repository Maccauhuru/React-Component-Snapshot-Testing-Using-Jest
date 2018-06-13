import React from 'react';
import PropTypes from 'prop-types';

/*
* Render list of Items
* @param {Object} props - List of items
*/

function Items(props) {
  const {items = [] } = props;

if(!items.length){
  /*No items in list */
  return <span className = "empty-message"> No items in the list </span>;
}
if(items.length===1){
  /*There is one item on list */
  return <span className="item-message">{items[0]}</span>;
}
  /*Render list of items */
  return(
  <ul>
 {items.map(item =><li key={item} className="item-message">{item}</li>)}
  </ul>
  );
}


Items.propTypes ={
  items : PropTypes.array,
};

Items.defaultProps = {
  items : [],
};


export default Items;