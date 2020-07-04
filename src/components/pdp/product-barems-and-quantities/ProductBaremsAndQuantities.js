import React from "react";
import {connect} from 'react-redux';

const ProductBaremsAndQuantities = (props) => {
    const { baremList } = props.productDetailState;
    const baremListLength = baremList.length;

    const baremPriceRenderer = (list) => {
        return list.map((item, index)=> {
            if(baremListLength === index + 1){
                return (
                    <div className="barem-price" key={index}>
                        <p>{item.minimumQuantity}+</p>
                        <p>{item.price} TL</p>
                    </div>
                )
            } else {
                return (
                    <div className="barem-price" key={index}>
                        <p>{item.minimumQuantity} - {item.maximumQuantity}</p>
                        <p>{item.price} TL</p>
                    </div>
                )
            }
        });
    };


    return (
        <div className="product-barems-and-quantity">
            <div className="product-barems">
                <div className="barem-prices-title">
                    <p>Toptan Fiyat</p>
                    <p>(Adet)</p>
                </div>
                <div className="barem-prices-wrapper">
                    {baremPriceRenderer(baremList)}
                </div>
            </div>
            <div className="product-quantity">
                <div className="product-quantity-title">
                    <p>Adet</p>
                </div>
                <div className="product-quantity-input">
                    <input type="text"/>
                    <span>Adet</span>
                    <span className="stock-quantity">Stok Adedi : <strong>600</strong></span>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productDetailState : state.productDetailReducer
    }
};

export default connect(mapStateToProps)(ProductBaremsAndQuantities);