import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addProductToFreezer } from '../../AC'
import F from '../../flavors'

class AddProductToFreezer extends Component {
    state = {
        flavor: '',
        amount: 1
    }

    renderFlavorOption = () => {
        return Object.keys(F).map(name =>
            <option key={name} value={name}>{F[name]}</option>
        )
    }

    render() {
        const { flavor, amount } = this.state
        return (
            <form>
                <div className="add-product-form">
                    <select name="flavor"
                            className="form-select"
                            value={flavor}
                    >
                        <option value="">Choose flavor</option>
                        {this.renderFlavorOption()}
                    </select>

                    <input type="numer"
                           min={1}
                           className="form-number"
                           name="amount"
                           value={amount}
                    />

                    <button className=""> Add product</button>
                </div>
            </form>
        )
    }
}

AddProductToFreezer.propTypes = {
    addProductToFreezer: PropTypes.func.isRequired
}

export default connect(
    null,
    {addProductToFreezer}
)(AddProductToFreezer)