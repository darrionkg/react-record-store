import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <img src={props.image} alt="" style={{width: '150px', height: '150px'}}/>
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
  image: PropTypes.string.isRequired,
};

export default Product;
