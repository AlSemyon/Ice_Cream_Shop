import React  from 'react';
import './freezer.css'

const  FreezerItem  = ({name, scoops}) => (
    <div className="ic">
        <p className="ic__title">{name}</p>
        <p className="ic__count">{scoops}</p>
        <button className="ic__restock">Restock</button>
    </div>
)

export default FreezerItem;