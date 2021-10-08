import React from 'react'
import { useSelector } from "react-redux";

const TotalItems = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIcecream = useSelector(state => state.iceCream.numOfIcecream)
  const numOfPizza = useSelector(state => state.pizza.numOfPizza)
  const totalItems = numOfCakes + numOfIcecream + numOfPizza;

    return (
      <div>
        <h2>
          Total Items <span>In Your Cart</span>
        </h2>
        <hr />
        <p>Total Cakes : {numOfCakes} </p>
        <p>Total IceCream : {numOfIcecream}</p>
        <p>Total Pizza : {numOfPizza} </p>
        <h3>Total Items : {totalItems}</h3>
      </div>
    );
}

export default TotalItems
