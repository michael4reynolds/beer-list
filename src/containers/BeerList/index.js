import React, { PropTypes } from 'react';

const BeerList = props => (
  <ul>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>);

BeerList.propTypes = { items: PropTypes.array.isRequired };
BeerList.defaultProps = { items: [] };
export default BeerList;
