import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return (
    <div>
      <style jsx>{`
        .color-toggle {
          background-color: white;
          padding-left: 10%;
          padding-right: 10%;
          padding-top: 1%;
          margin: 5%;
          color: black;
        }
        .color-toggle:hover {
          background-color: lightgrey;
        }
      `}</style>
      <div className="color-toggle">
        <h3>{props.title} - {props.artist}</h3>
        <h4>{props.description}</h4>
        <p><em>{props.price}</em></p>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Product;