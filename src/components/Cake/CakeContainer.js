import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../../redux'
import cakeImg from "../../img/cake.jpeg"
import { removeCake } from '../../redux/cake/cakeActions'


const CakeContainer = (props) => {
    return (
      <div className="cake">
        <img src={cakeImg} alt="cake" width="200px" />
        <h2>Your Cart </h2>
        <h1>{props.numOfCakes}</h1>
        <button className="btn btn-warning" onClick={props.buyCake}>
          Buy Cake
        </button>
        <br />
        <button className="btn btn-danger" onClick={props.removeCake}>
          Remove Cake
        </button>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      buyCake: () => dispatch(buyCake()),
      removeCake: () => dispatch(removeCake()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
