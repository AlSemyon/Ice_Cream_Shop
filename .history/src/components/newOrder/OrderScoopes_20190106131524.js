import React, {Component} from 'react';
import PropTypes from 'prop-types'

const OrderScoopes = ({}) => (
    <div className="scoop">
    <div className="scoop__title">Vanilla</div>
    <div className="scoop-buttons">
        <button className="scoop-buttons__item">+</button>
        <span className="scoop-buttons__count">22</span>
        <button className="scoop-buttons__item">-</button>
    </div>
</div>
)

export default OrderScoopes;