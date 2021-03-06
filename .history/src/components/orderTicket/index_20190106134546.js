import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './orderTicket.css'
import Order from './Order'
import {fullFillOrder, payForOrder, cancelOrder} from '../../AC'

const OrderTicket  = () =>
    <div className="box__content box__content_orders">
        <Order />
        <Order />
        <Order />
	</div>

OrderTicket.propTypes ={

}
export default connect(
    ({order}) => ({orders: order}),
    {fullFillOrder, payForOrder, cancelOrder}
);