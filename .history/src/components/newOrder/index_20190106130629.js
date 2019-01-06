import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newOrder.css'
import OrderForm from './OrderForm'
import {placeOrder} from "../../AC"

const DEFAULT_STATE = {
    customerName: '',
    scoopes: {},
    cone: false
}

class NewOrder extends Component {
    state = {
        ...DEFAULT_STATE
    }

    handleName = ({target}) = this.setState({
        customerName: target.value
    })
	render(){
        const {customerName, scoopes, cone} = this.state;
		return(
            <div>
                <form className="form">
                    <OrderForm
                        handleName={this.handleName}
                        customerName={customerName}/>
                    <div>
                        <label className="label-form label-form_scoops">Scoops</label>
                        <div className="scoops">
                    <div className="scoop">
                        <div className="scoop__title">Vanilla</div>
                        <div className="scoop-buttons">
                            <button className="scoop-buttons__item">+</button>
                            <span className="scoop-buttons__count">22</span>
                            <button className="scoop-buttons__item">-</button>
                        </div>
                    </div>


                    <div className="scoop">
                        <div className="scoop__title">Chocolatte</div>
                        <div className="scoop-buttons">
                            <button className="scoop-buttons__item">+</button>
                            <span className="scoop-buttons__count">22</span>
                            <button className="scoop-buttons__item">-</button>
                        </div>
                    </div>
                </div>
                    </div>

                    <button className="order-button">Add</button>
                </form>
             </div>
		);
	}
}

export default connect(
    ({order}) => ({order}),
    {placeOrder}
)(NewOrder)