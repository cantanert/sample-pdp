import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

const ProductActionButtons = (props) => {

    let [isAddToCartEnabled, setIsAddToCartEnabled] = useState(false);

    const {selectedCount, activeVariant, quantityBaremMax, quantityBaremMin, selectedSize, piecePrice} = props.productDetailState;
    useEffect(()=> {
        (selectedCount < quantityBaremMin || selectedCount > quantityBaremMax || !activeVariant || !selectedSize )
            ? setIsAddToCartEnabled(false)
            : setIsAddToCartEnabled(true);
    },[selectedCount,activeVariant,selectedSize]);

    const addToCartClickHandler = () => {
        console.log("Selected Barem Price : " + piecePrice);
        console.log("Selected Variant ID : " + activeVariant.id);
        console.log("Selected Variant Data : ");
        console.log(activeVariant);
    };

    return (
        <div className="product-action-buttons">
            <div className="submit-button">
                <button
                    disabled={ !isAddToCartEnabled }
                    onClick={() => addToCartClickHandler()}>
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