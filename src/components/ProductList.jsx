import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Product from './Product';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

// const classes = useStyles();

export default function ProductList(props) {

    return (
      <div>
        {props.productList.map((product) =>

        <Product title={product.title}
          artist={product.artist}
          description={product.description}
          category={product.category}
          price={product.price}
          image={product.image}
          key={product.id}/>
      )}
      </div>
    );
  }

ProductList.propTypes = {
  productList: PropTypes.array
}
