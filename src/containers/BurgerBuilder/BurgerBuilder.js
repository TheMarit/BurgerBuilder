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

    removeIngredientHandler = (type) => {
        let currentIngredient = this.state.ingredients[type] - 1;
        if (currentIngredient < 0){
            return;
        }
        let updatedIngredients = {...this.state.ingredients, [type]: currentIngredient}
        this.setState({ingredients: updatedIngredients})
    }


    render(){

        let disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled ={disabledInfo}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;