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
            <div>
                test
            </div>
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