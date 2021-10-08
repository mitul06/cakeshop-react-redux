import React from 'react'
import { connect } from 'react-redux'
import { buyPizza } from "../../redux";
import pizzaImg from '../../img/pizza.jpeg'
import { removePizza } from "../../redux/pizza/pizzaActions";

const PizzaContainer = (props) => {
    return (
      <div className="pizza">
        <img src={pizzaImg} alt="ice-cream" width="200px" height="200px" />
        <h2>Your Cart </h2>
        <h1>{props.numOfPizza}</h1>
        <button className="btn btn-warning" onClick={props.buyPizza}>
          Buy Pizza
        </button>
        <br />
        <button className="btn btn-danger" onClick={props.removePizza}>
          Remove Pizza
        </button>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
      numOfPizza: state.pizza.numOfPizza,
    };
}

const mapDispatchToState = (dispatch) => {
    return {
      buyPizza: () => dispatch(buyPizza()),
      removePizza: () => dispatch(removePizza()),
    };
}

export default connect(mapStateToProps, mapDispatchToState) (PizzaContainer)
