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
        return (
            <form>
                <div>
                    <select name="flavor"
                            className=""
                    >
                        <option value="">Choose flavor</option>
                    </select>
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