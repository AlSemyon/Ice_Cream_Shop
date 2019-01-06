import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './orderTicket.css'
import Order from './Order'

const OrderTicket  = () =>
    <div className="box__content box__content_orders">
        <Order />
        <Order />
        <Order />
	</div>


export default OrderTicket;