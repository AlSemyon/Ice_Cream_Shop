import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Box from '../layout/Box';
import FreezerItem from './FreezerItem'
import { updateTemperature, addProductToFreezer } from '../../AC'


class  Freezer  extends Component {
    
    componentDidMount() {
        const randomTemperature = Math.round(Math.random() * 10);
        this.props.updateTemperature(randomTemperature);
    }

    render(){
        const {flavors, temperature} = this.props;
        const items = Object.keys(flavors).map(name =>
            <FreezerItem key={name} 
                         name={name} 
                         scoops={flavors[name]} />
        )
    	return (
    		<Box title={`Freezrt ( -${temperature || 0} C)`}>
                <div className="box__content">
                    {items}
                </div>
        </Box>
    )
    }
}

Freezer.propTypes = {
    temperature : PropTypes.number,
    flavors: PropTypes.object,
    updateTemperature: PropTypes.func.isRequired,
    addProductToFreezer: PropTypes.func.isRequired,
}

Freezer.defaultProps = {
    temperature: 0,
    flavors: {}
}

export default connect(
    ({freezer}) => ({
        flavors: freezer.flavors,
        temperature: freezer.temperature
    }),
    { updateTemperature, addProductToFreezer}
)(Freezer)
