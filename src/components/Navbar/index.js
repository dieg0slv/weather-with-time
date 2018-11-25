// React
import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'

import { toggleMenu } from '../../ducks/menu_navbar';

const NavbarTop = () => (
    <Navbar />
);

const mapStateToProps = ({ menu_navbar }) => ({
    open: menu_navbar.open
});

const mapDispatchToProps = (dispatch) => ({
    toggleMenu: (open) => dispatch(toggleMenu(open))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarTop);