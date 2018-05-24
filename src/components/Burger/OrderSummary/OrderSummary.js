import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientList = Object.keys(props.ingredients)
        .map((ingKey) => <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}:</span> {props.ingredients[ingKey]}</li>)
    
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Continue to checkout?</p>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <Button btnType='Danger' clicked={props.clickButtonCancel}>Cancel</Button>
            <Button btnType='Success' clicked={props.clickButtonContinue}>Continue</Button>
        </React.Fragment>
    )
}

export default orderSummary;