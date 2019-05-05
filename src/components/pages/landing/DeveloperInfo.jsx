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

import styles from './developerInfo.styles';

const DeveloperInfo = ({
  name, image, roles, classes, url,
}) => (
  <Card className={classes.card} raised>
    <CardActionArea href={url} target="_blank">
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      >
        <CardContent className={classes.cardContent}>
          <Typography classes={{ root: classes.text }} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography classes={{ root: classes.text }} component="div">
            {roles.map(role => <div>{role}</div>)}
          </Typography>
        </CardContent>
      </CardMedia>
    </CardActionArea>
  </Card>
);

DeveloperInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default withStyles(styles)(DeveloperInfo);
