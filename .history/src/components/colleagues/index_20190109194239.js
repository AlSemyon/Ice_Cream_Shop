import React, {Fragment, Component} from 'react';
import Colleague from './Colleague'
import {connect} from 'react-redux'
import './colleagues.css'
import {fetchEmployees} from '../../AC'

class Colleagues extends Component {
    render() {
        return <Fragment>
        <Colleague name="Pete" image="person1.png" status="checked in" />
        <Colleague name="Ashley" image="person5.png" status="checked in" />
        <Colleague name="Bill" image="person2.png" status="checked in" />
    
    </Fragment>
    }
}

export default connect(
    ({employees}) => ({
        data: employees.data,
        loading: employees.loading,
        error: employees.error
    }),
    {fetchEmployees}
)(Colleagues)