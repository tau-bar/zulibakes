import React from 'react';
import HomePage from '../../pages/homepage/homepage.component';

// components
import './homepage-button.styles.scss'

// routing
import { withRouter } from 'react-router-dom';

const HomePageButton = ({ children, history, toPush }) => ( 
    <div onClick = {() => history.push(`/${toPush}`)}>
        {children}
    </div>
)

export default withRouter(HomePageButton); 