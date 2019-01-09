import React, {Fragment, Component} from 'react';
import Colleague from './Colleague'
import {connect} from 'react-redux'
import './colleagues.css'
import {fetchEmployees} from '../../AC'

class Colleagues extends Component {
    
    componentDidMount() {
        this.props.fetchEmployees()
    }

    render() {
        const {data, loading, error} = this.props;
        // if (loading) {
        //     return <h2>Loading ...</h2>
        // }
        return <div>
            {!loading && !error && <Fragment>
                {data.map(person =>
                    <Colleague name={person.name.first}
                               name={person.name.first})}
                <Colleague name="Pete" image="person1.png" status="checked in" />
                <Colleague name="Ashley" image="person5.png" status="checked in" />
                <Colleague name="Bill" image="person2.png" status="checked in" />
            </Fragment>}
            {!loading && error && <h2>Error</h2>}
            {loading && <h2>Loading ...</h2>}
        </div>
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