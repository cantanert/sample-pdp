import React, {useState} from "react";
import {connect} from 'react-redux';
import {setSelectedCountActionCreator} from "../../../redux/actions/pdp/productActions"

const ProductBaremsAndQuantities = (props) => {
    const { baremList } = props.productDetailState;


    const inputChangeHandler = (e) => {
        let count;
        (e.target.value) ? count = e.target.value : count = null;
        props.setSelectedCount(count);
    };

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
                    <input type="number" onChange={(e) => inputChangeHandler(e)}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedCount: (imageURL) => {
            dispatch(setSelectedCountActionCreator(imageURL))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductBaremsAndQuantities);