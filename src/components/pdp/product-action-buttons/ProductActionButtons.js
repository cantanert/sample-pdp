import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

const ProductActionButtons = (props) => {

    const [isAddToCartEnabled, setIsAddToCartEnabled] = useState(false);

    const {selectedCount, activeVariant} = props.productDetailState;
    useEffect(()=> {

        (selectedCount && activeVariant) ? setIsAddToCartEnabled(true) : setIsAddToCartEnabled(false);

    },[selectedCount,activeVariant]);

    return (
        <div className="product-action-buttons">
            <div className="submit-button">
                <button
                    disabled={ !isAddToCartEnabled }>
                    Sepete Ekle
                </button>
            </div>
            <div className="payment-options">
                <span>Ödeme Seçenekleri</span>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
      productDetailState : state.productDetailReducer
  }
};



export default connect(mapStateToProps)(ProductActionButtons);