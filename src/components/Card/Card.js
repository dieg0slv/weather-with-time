import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Clock from '../Clock';

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
};

class MediaCard extends Component {

  render() {
    const { classes } = this.props;

    const { forecast, place, isLoading } = this.props;

    const shouldRender = (!isLoading && forecast.currently);

    if (!shouldRender)
      return null;

    return shouldRender && (
      <Card className={classes.card} style={{ margin: '0 auto', fontWeight: 'normal' }}>
        <br />
        <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'lighter' }}>
          {place.toUpperCase()}
          <Clock timezone={forecast.timezone}
          />
          <br />
          {forecast.currently.summary}
          <br />
          {parseInt((forecast.currently.temperature - 32) / 1.8)}ºC
        </p>
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);