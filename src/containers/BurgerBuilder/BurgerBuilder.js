import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) => {
        let currentIngredient = this.state.ingredients[type] + 1;
        let updatedIngredients = {...this.state.ingredients, [type]: currentIngredient}
        this.setState({ingredients: updatedIngredients})
    }


    render(){
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredientHandler}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;