import React, {Component}  from 'react';
import Box from '../layout/Box';
import FreezerItem from './FreezerItem'


class  Freezer  extends Component {
    
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


export default Freezer;
