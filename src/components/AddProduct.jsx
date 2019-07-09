import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function AddProduct() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" style={{backgroundColor: "white", margin: "7%", padding: "5%"}}>
      <TextField
        id="standard-name"
        label="Product Title"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />

      <TextField
        id="standard-name"
        label="Artist"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Product Description"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />

      <TextField
        id="standard-select-currency-native"
        select
        label="Product Category"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <TextField
        id="standard-name"
        label="Price"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />


      <TextField
        id="standard-full-width"
        label="Category"
        style={{ margin: 8 }}
        helperText="Full width!"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
