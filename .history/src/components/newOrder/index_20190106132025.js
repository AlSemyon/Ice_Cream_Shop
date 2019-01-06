import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newOrder.css'
import OrderForm from './OrderForm'
import OrderScoopes from './OrderScoopes'
import {placeOrder} from "../../AC"
import F from '../../flavors'

const DEFAULT_STATE = {
    customerName: '',
    scoopes: {},
    cone: false
}

class NewOrder extends Component {
    state = {
        ...DEFAULT_STATE
    }

    handleName = ({target}) => this.setState({
        customerName: target.value
    })

    handleCone = ({target}) => this.setState({
        cone: target.id === 'cone'
    })

	render(){
        const {customerName, scoopes, cone} = this.state;
		return(
            <div>
                <form className="form">
                    <OrderForm
                        cone={cone}
                        handleCone={this.handleCone}
                        handleName={this.handleName}
                        customerName={customerName}/>
                    <div>
                        <label className="label-form label-form_scoops">Scoops</label>
                        <div className="scoops">

                        {
                            Object.keys(F).map(flavor => 
                            <OrderScoopes key={flavor}
                                          count={scoopes[flavor] || 0}
                                          flavor={flavor}/>)
                        }
                        
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