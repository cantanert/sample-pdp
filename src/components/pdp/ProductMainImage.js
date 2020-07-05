import React from "react";
import {connect} from "react-redux";

const ProductMainImage = (props) => {
    return (
        <div className="product-main-image">
            <img src={props.productDetailStates.activeImage} width="100%"/>
        </div>
    )
};

const mapStateToProps = (states) => {
  return {
      productDetailStates : states.productDetailReducer
  }
};

export default connect(mapStateToProps)(ProductMainImage);