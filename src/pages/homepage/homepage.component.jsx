import React from 'react';
import './homepage.styles.scss'

const HomePage = ({ history, match }) => (
    <div className = 'homepage'>
        <div className = 'home-menu'>
            <div className = 'logo-container'>
                <h1>Logo</h1>
            </div>

            <div className = 'button-container'>
                <button onClick={() => history.push(`/order`)}>Order Now</button>
                <button>About Us</button>
                {console.log(history)}
                {console.log(match)}
            </div>
        </div>
    </div>
)

export default HomePage;