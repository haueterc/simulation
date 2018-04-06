import React, { Component } from 'react';
import Product from './Product/Product';

import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <Product />
            </div>
        );
    }
}

export default Dashboard;
