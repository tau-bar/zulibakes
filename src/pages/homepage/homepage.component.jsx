import React from 'react';
import './homepage.styles.scss'

// components
import HomePageButton from '../../components/homepage-button/homepage-button.component';

const HomePage = ({ history }) => (
    <div className = 'homepage'>
        <div className = 'home-menu'>
            <div className = 'logo-container'>
                <h1>Zulibakes</h1>
            </div>

            <div className = 'button-container'>
                <HomePageButton toPush = {'order'}>Order</HomePageButton>
                <HomePageButton toPush = {'about'}>About Us</HomePageButton>
            </div>
        </div>
    </div>
)

export default HomePage;