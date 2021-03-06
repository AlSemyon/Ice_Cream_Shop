import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Box from '../layout/Box';
import FreezerItem from './FreezerItem'
import { updateTemperature, addProductToFreezer } from '../../AC'


class  Freezer  extends Component {
    
    componentDidMount() {
        let randomTemperature = Math.round(Math.random() * 10);
        this.props.updateTemperature(randomTemperature);
    }

    render(){
    	return (
    		<Box title="Freezer ( 0 C)">
        <div className="box__content">
            <FreezerItem name="Vanilla" scoops="12" />
            <FreezerItem name="Chocolatte" scoops="33"/>
        </div>
        </Box>
    )
    }
}

Freezer.propTypes = {
    temperature : PropTypes.number,
    flavors: PropTypes.number,
    updateTemperature: PropTypes.number,
    addProductToFreezer: PropTypes.number,
}

export default connect(
    ({freezer}) => ({
        flavors: freezer.flavors,
        temperature: freezer.temperature
    }),
    { updateTemperature, addProductToFreezer}
)(Freezer)
