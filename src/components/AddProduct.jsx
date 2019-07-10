import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 } from 'uuid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing(1),
    height: 36
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const categories = [
  {
    value: 'accessories',
    label: 'Accessories',
  },
  {
    value: 'clothing',
    label: 'Clothing',
  },
  {
    value: 'music',
    label: 'Music',
  },
];

export default function AddProduct(props) {
  const classes = useStyles();
  let _title = null;
  let _artist = null;
  let _description = null;
  let _category = null;
  let _price = null;

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation(
      {
        title: _title.value,
        artist: _artist.value,
        description: _description.value,
        category: _category.value,
        price: _price.value,
        id: v4(),
      }
    );
    _title.value = '';
    _artist.value = '';
    _description.value = '';
    _category.value = '';
    _price.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewProductFormSubmission} className={classes.container} noValidate autoComplete="off" style={{backgroundColor: "white", margin: "7%", padding: "5%"}}>
      <TextField
        id="title"
        label="Title"
        className={classes.textField}
        margin="normal"
        ref={(textField) => {_title = textField;}}
      />
      <TextField
        id="artist"
        label="Artist"
        className={classes.textField}
        margin="normal"
        ref={(textField) => {_artist = textField;}}
      />
      <TextField
        id="description"
        label="Description"
        className={classes.textField}
        margin="normal"
        ref={(textField) => {_description = textField;}}
      />
      <TextField
        id="category"
        select
        label="Category"
        className={classes.textField}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        ref={(textField) => {_category = textField;}}
        margin="normal"
      >
      {categories.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="price"
        label="Price"
        style={{ margin: 8 }}
        margin="normal"
        ref={(textField) => {_price = textField;}}
      />
      <Button type="submit" className={classes.button} variant="contained" color="primary">Submit</Button> 
    </form>
  </div>
  );
}

AddProduct.propTypes = {
  onNewProductCreation: PropTypes.func
};
