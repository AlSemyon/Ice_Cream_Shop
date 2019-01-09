import React from 'react';
import PropTypes from 'prop-types'
const Colleague = ({image, name, status}) => {
    const fullName = `${name.title}. ${name.first} ${name.last}`;
    const picture = image.medium;
	return(
        <div className="colleagues">
            <div className="colleague__photo">
                <img src={picture} alt={fullName} />
            </div>
            <div>
                <p className="colleague-person-name">{fullName}</p>
                <p className="colleague-person-status">{status}</p>
            </div>
        </div>
	);
}

export default Colleague;