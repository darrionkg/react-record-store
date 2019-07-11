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

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 400,
  },
  media: {
    height: 400,
  },
  productCard: {
    width: '25%',
    minWidth: '550px',
    minHeight: '400px',
    [theme.breakpoints.down('lg')]: {
      width: '33%',
      minWidth: '550px',
      minHeight: '400px'
    },
    [theme.breakpoints.down('md')]: {
      width: '50%',
      minWidth: '550px',
      minHeight: '400px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: '550px',
      minHeight: '400px'
    },
  },
}));

export default function Product(props) {
  const classes = useStyles();

  return (
    <div className={classes.productCard}>
    <style jsx>{`
        .color-toggle {
          // width: 100%;
          background-color: white;
          // padding-left: 10%;
          // padding-right: 10%;
          // padding-top: 1%;
          margin: 5%;
          color: black;
        }
        .color-toggle:hover {
          background-color: lightgrey;
        }
      `}</style><div className="color-toggle">
      
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.artist}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <em>{props.title}</em> by {props.artist}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              <br/>
              <Typography variant="body2" color="textSecondary" component="p">
                ${props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              More Info
            </Button>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
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
