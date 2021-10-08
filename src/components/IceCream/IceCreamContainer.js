import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream, removeIceCream } from '../../redux'
import icecreamImg from '../../img/icecrem.jpeg'

const IceCreamContainer = (props) => {
    return (
      <div className="icecream">
        <img src={icecreamImg} alt="ice-cream" width="200px" height="200px" />
        <h2>Your Cart</h2>
        <h1>{props.numOfIcecream}</h1>
        <button className="btn btn-warning" onClick={props.buyIceCream}>
          Buy IceCream
        </button>
        <br />
        <button className="btn btn-danger" onClick={props.removeIceCream}>
          Remove IceCream
        </button>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
      numOfIcecream: state.iceCream.numOfIcecream,
    };
} 

const mapDispatchToState = (dispatch) => {
    return {
      buyIceCream: () => dispatch(buyIceCream()),
      removeIceCream : () => dispatch(removeIceCream())
    };
}

export default connect(mapStateToProps, mapDispatchToState) (IceCreamContainer)
