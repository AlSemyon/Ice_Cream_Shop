import React, {Component} from 'react';
import './newOrder.css'

class NewOrder extends Component {
	render(){
		return(
            <form className="form">
                <div className="row">
                    <div className="col">
                        <label className="label-form">Customer name</label>
                        <input type="text" className="form-control" placeholder="Customer name" />
                    </div>
                    <div className="col">
                        <label className="label-form">Container</label>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="cone"
                                       value="cone" />
                                    <label className="form-check-label" htmlFor="cone">Cone</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="cup"
                                       value="cup" />
                                    <label className="form-check-label" htmlFor="cup">Cup</label>
                            </div>
                        </div>
                    </div>
                </div>
                 <button className="order-button">Add</button>
             </form>

             <hr/>
             <div>
                <label className="label-form label-form_scoops">Scoops</label>
                <div className="scoops">
                    <div className="scoop">
                        <div className="scoop__title">Vanilla</div>
                        <div className="scoop-buttons">
                            <button className="scoop-buttons__item">+</button>
                            <span className="scoop-buttons__count">22</span>
                            <button className="scoop-buttons__item">-</button>
                        </div>
                    </div>


                    <div className="scoop">
                        <div className="scoop__title">Chocolatte</div>
                        <div className="scoop-buttons">
                            <button className="scoop-buttons__item">+</button>
                            <span className="scoop-buttons__count">22</span>
                            <button className="scoop-buttons__item">-</button>
                        </div>
                    </div>
                </div>
             </div>
		);
	}
}

export default NewOrder;