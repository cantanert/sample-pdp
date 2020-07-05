import React from "react";
import {connect} from "react-redux";

const ProductMinMaxInformations = (props) => {

    let {priceBaremMin, priceBaremMax, minSaleQuantity} = props.productDetailState;

    return (
        <div className="product-min-max-infos">
            <p className="price-per-piece"><span>{priceBaremMin + " TL - " + priceBaremMax +" TL"}</span> / Adet</p>
            <p className="min-quantity">{minSaleQuantity} Adet (Minimum Sipariş Adedi)</p>
        </div>
    )
};

const mapStateToProps = (state) =>{
    return {
        productDetailState : state.productDetailReducer
    }
};

export default connect(mapStateToProps)(ProductMinMaxInformations);