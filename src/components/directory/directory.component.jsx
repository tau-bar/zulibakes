import React, { Component } from 'react';
import './directory.styles.scss';

// components
import MenuItem from '../menu-item/menu-item.component';

// router
import { withRouter } from 'react-router-dom';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                        title: 'Cakes',
                        id: 1
                    },
                        {
                        title: 'Cookies',
                        id : 2
                    },
                        {
                        title: 'Cupcakes',
                        id: 3
                    },
                        {   
                        title: 'Festive',
                        id: 4
                    },
                        {
                        title: 'Pastries',
                        id: 5
                        }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, id }) => (
                        <MenuItem key = {id} title = {title}/>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(Directory);
