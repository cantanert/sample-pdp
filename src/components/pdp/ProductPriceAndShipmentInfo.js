import React from "react";
import {FiTruck} from "react-icons/fi"
import ProductActionButtons from "./ProductActionButtons";
import {connect} from "react-redux";

const ProductPriceAndShipmentInfo = (props) => {

    let {selectedCount, piecePrice } = props.productDetailState;

  return (
      <div className="product-price-and-shipment-info">
          <div className="product-total-price-title">
              <p>Toplam</p>
          </div>
          <div className="product-total-price-wrapper">
              <div className="product-price-and-shipment">
                  <p className="price">{(selectedCount && piecePrice) ? (selectedCount*piecePrice).toFixed(2) : "0" },00 TL</p>
                  <div className="shipment">
                      <p><span className="truck-icon"><FiTruck/></span> Kargo Ücreti: <span className="shipment-type">Alıcı Öder</span></p>
                  </div>
              </div>
              <div className="product-action-buttons-wrapper">
                  <ProductActionButtons/>
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

export default connect(mapStateToProps)(ProductPriceAndShipmentInfo);