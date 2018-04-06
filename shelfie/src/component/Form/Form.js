import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            price: 0,
            imgUrl: ''
        }
    }
    render() {
        return (
            <div className="Form_parent">
                <div className="Product_pic_container">
                    <img clasName="Product_pic" src={imgUrl}/>
                </div>
                <div className="Image_url_container">
                    <input className="Img_url"/>
                </div>
                <div className="Product_name_container">
                    <input className="Product_name"/>
                </div>
                <div className="Price_container">
                    <input className="Price"/>
                </div>
            </div>
        );
    }
}

export default Form;
