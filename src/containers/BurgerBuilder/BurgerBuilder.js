import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.60,
    bacon: 1.20,
    cheese: .90,
    meat: 2.40
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5.40,
        purchasable: false,
        purchasing: false
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert('You continued!');
        this.setState({purchasing: false});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients)
            .reduce((total,el) => total + el ,0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        let currentIngredient = this.state.ingredients[type] + 1;
        let updatedIngredients = {...this.state.ingredients, [type]: currentIngredient}
        let currentPrice = this.state.totalPrice;
        let updatedPrice = currentPrice + INGREDIENT_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        let currentIngredient = this.state.ingredients[type] - 1;
        if (currentIngredient < 0){
            return;
        }
        let updatedIngredients = {...this.state.ingredients, [type]: currentIngredient}
        let currentPrice = this.state.totalPrice;
        let updatedPrice = currentPrice - INGREDIENT_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice})
        this.updatePurchaseState(updatedIngredients)
    }


    render(){

        let disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <React.Fragment>
                <Modal purchasing={this.state.purchasing} cancel={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price={this.state.totalPrice}
                        clickButtonCancel={this.purchaseCancelHandler}
                        clickButtonContinue={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled ={disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    purchasing = {this.purchasingHandler}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;