import React from 'react';
import PropTypes from 'prop-types';
import aliceInChainsDirt from './../assets/merch-images/aliceInChainsDirt.jpg';

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
        <img src={aliceInChainsDirt} alt="" style={{width: '150px', height: '150px'}}/>
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
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default Product;
