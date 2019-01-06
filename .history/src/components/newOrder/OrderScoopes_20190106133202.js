import React, {Component} from 'react';
import PropTypes from 'prop-types'

const OrderScoopes = ({flavor, count, handleIncreaseFlavor, handleDecreaseFlavor}) => (
    <div className="scoop">
    <div className="scoop__title">{flavor}</div>
    <div className="scoop-buttons">
        <button className="scoop-buttons__item" onClick={handleIncreaseFlavor}>+</button>
        <span className="scoop-buttons__count">{count}</span>
        <button className="scoop-buttons__item" onClick={handleDecreaseFlavor}>-</button>
    </div>
</div>
)
OrderScoopes.propTypes = {
    flavor:PropTypes.string.isRequired, 
    handleIncreaseFlavor:PropTypes.func.isRequired, 
    count:PropTypes.number.isRequired, 
    handleDecreaseFlavor:PropTypes.func.isRequired
}

export default OrderScoopes;