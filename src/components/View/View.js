// React
import React, { Fragment } from 'react';

// Custom Components
import Navbar from '../Navbar/Navbar';
import Card from '../Card'
import Searchbar from '../Searchbar';


// Utils Functions

const View = ({ isLoading }) => !isLoading && (
    <Fragment>
        <Navbar />
        <br />
        <div style={{ display: 'flex' }}>
            <Searchbar style={{ margin: '0 auto' }} />
        </div>
        <br />
        <div>
            <Card />
        </div>
    </Fragment>
);



export default View;
