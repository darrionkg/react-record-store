import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Admin() {
  const classes = useStyles();
  let pageToShow = null;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        <Link className={'noDecorationWhite'} to='/editproduct'>
          Edit Product
        </Link>
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        <Link className={'noDecorationWhite'} to='/addproduct'>
          Add Product
        </Link>
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}
