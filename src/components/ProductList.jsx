import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// const classes = useStyles();

export default function ProductList(props) {

  // return (
  //   <div className={classes.root}>
  //     <Grid container spacing={3}>
  //     <Grid item xs={12}>
  //     <Paper className={classes.paper}>xs=12</Paper>
  //     </Grid>
  //     <Grid item xs={6}>
  //     <Paper className={classes.paper}>xs=6</Paper>
  //     </Grid>
  //     <Grid item xs={6}>
  //     <Paper className={classes.paper}>xs=6</Paper>
  //     </Grid>
  //     <Grid item xs={3}>
  //     <Paper className={classes.paper}>xs=3</Paper>
  //     </Grid>
  //     <Grid item xs={3}>
  //     <Paper className={classes.paper}>xs=3</Paper>
  //     </Grid>
  //     <Grid item xs={3}>
  //     <Paper className={classes.paper}>xs=3</Paper>
  //     </Grid>
  //     <Grid item xs={3}>
  //     <Paper className={classes.paper}>xs=3</Paper>
  //     </Grid>
  //     </Grid>
  //   </div>
  // );

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
