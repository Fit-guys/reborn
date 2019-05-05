import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

import styles from './technologyInfo.styles';

const TechnologyInfo = ({
  name, image, classes, url,
}) => (
  <Card className={classes.card} raised>
    <CardActionArea href={url} target="_blank">
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

TechnologyInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(TechnologyInfo);
