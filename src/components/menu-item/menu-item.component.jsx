import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title }) => (
    <div className = 'menu-item'>
        <div className = 'content'>
            <p className = 'title'>{ title }</p>
        </div>
    </div>
);

export default MenuItem;