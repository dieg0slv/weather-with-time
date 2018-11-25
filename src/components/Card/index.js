import React from 'react';

import { connect } from 'react-redux'

import MediaCard from './Card';

const mapStateToProps = ({ forecast, place, isLoading }) => ({
    forecast,
    place,
    isLoading
})

export default connect(mapStateToProps)(MediaCard);