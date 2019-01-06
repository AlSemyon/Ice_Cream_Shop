import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addProductToFreezer } from '../../AC'

class AddProductToFreezer extends Component {
    state = {
        flavor: '',
        amount: 1
    }

    render() {
        const { flavor, amount } = this.state
        return (
            <form>
                <div>
                    <select name="flavor"
                            className=""
                    >
                        <option value="">Choose flavor</option>
                    </select>

                    <input type="numer"
                           min={1}
                           className=""
                           name=""
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