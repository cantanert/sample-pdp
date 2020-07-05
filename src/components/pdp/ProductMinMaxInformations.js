import React from "react";
import {connect} from "react-redux";

const ProductMinMaxInformations = (props) => {

    let {priceBaremMin, priceBaremMax, quantityBaremMin} = props.productDetailState;

    return (
        <div className="product-min-max-infos">
            <p className="price-per-piece"><span>{priceBaremMax + " TL - " + priceBaremMin +" TL"}</span> / Adet</p>
            <p className="min-quantity">{quantityBaremMin} Adet (Minimum Sipariş Adedi)</p>
        </div>
    )
};

const mapStateToProps = (state) =>{
    return {
        productDetailState : state.productDetailReducer
    }
};

export default connect(mapStateToProps)(ProductMinMaxInformations);