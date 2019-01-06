import React, {Component} from 'react';
import PropTypes from 'prop-types'

const OrderForm =({}) => (
    <form className="form">
    <div className="row">
        <div className="col">
            <label className="label-form">Customer name</label>
            <input type="text" className="form-control" placeholder="Customer name" />
        </div>
        <div className="col">
            <label className="label-form">Container</label>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="cone"
                           value="cone" />
                        <label className="form-check-label" htmlFor="cone">Cone</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="cup"
                           value="cup" />
                        <label className="form-check-label" htmlFor="cup">Cup</label>
                </div>
            </div>
        </div>
    </div>
     <button className="order-button">Add</button>
 </form>

)

export default OrderForm;