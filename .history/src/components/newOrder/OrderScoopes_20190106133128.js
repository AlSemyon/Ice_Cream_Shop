import React, {Component} from 'react';
import PropTypes from 'prop-types'

const OrderScoopes = ({flavor, count, handleIncreaseFlavor}) => (
    <div className="scoop">
    <div className="scoop__title">{flavor}</div>
    <div className="scoop-buttons">
        <button className="scoop-buttons__item" onClick={handleIncreaseFlavor}>+</button>
        <span className="scoop-buttons__count">{count}</span>
        <button className="scoop-buttons__item" onClick={handleIncreaseFlavor}>-</button>
    </div>
</div>
)

export default OrderScoopes;