import React from 'react';

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
        </React.Fragment>
    )
}

export default orderSummary;