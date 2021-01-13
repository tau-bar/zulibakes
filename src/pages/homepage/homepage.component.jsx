import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
    <div className = 'homepage'>
        <div className = 'home-menu'>
            <div className = 'logo-container'>
                <h1>Logo</h1>
            </div>

            <div className = 'button-container'>
                <button>Order Now</button>
                <button>About Us</button>
            </div>
        </div>
    </div>
)

export default HomePage;