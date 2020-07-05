import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {
    setSelectedCountActionCreator,
    setPiecePriceActionCreator
} from "../../../redux/actions/pdp/productActions"

const ProductBaremsAndQuantities = (props) => {
    const { baremList, selectedCount, quantityBaremMin, quantityBaremMax} = props.productDetailState;

    let [baremIndex,setBaremIndex] = useState(null);

    const baremActivater = () => {
      if(selectedCount){
          let count = parseInt(selectedCount);
          baremList.forEach((item,index)=>{
              if(count >= item.minimumQuantity && selectedCount <= item.maximumQuantity){
                  setBaremIndex(index);
                  props.setPiecePrice(item.price);
              } else if(count < quantityBaremMin || count> quantityBaremMax){
                  setBaremIndex(null);
                  props.setPiecePrice(null);
              }
          });
      } else {
          setBaremIndex(null);
      }
    };

    useEffect(()=>{
        baremActivater();
    },[selectedCount]);

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
                    <div className={"barem-price " + (baremIndex === index ? "selected" : " ") } key={index}>
                        <p>{item.minimumQuantity}+</p>
                        <p>{item.price} TL</p>
                    </div>
                )
            } else {
                return (
                    <div className={"barem-price " + (baremIndex === index ? "selected" : " ")} key={index}>
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
        },
        setPiecePrice: (price) => {
            dispatch(setPiecePriceActionCreator(price));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductBaremsAndQuantities);