import React from 'react';
import PropTypes from 'prop-types';

import  './items-list.css';

const ItemsList  = (props) => {

   const { data, onItemSelected, children: renderLabel } = props;

   const items = data.map( (item) => {
      const { id } = item;
      const label = renderLabel( item );

      return (
         <li className="list-item"
             key={id}
             onClick={() => onItemSelected(id)}>
            {label}
         </li>
      )
   });

   return (
      <React.Fragment>
         {items}
      </React.Fragment>
   )
};

ItemsList.defaultProps = {
   onItemSelected: () => {}
};

ItemsList.propTypes = {
   onItemSelected: PropTypes.func,
   data: PropTypes.arrayOf(PropTypes.object).isRequired,
   children: PropTypes.func.isRequired
};

export default ItemsList;