import React from "react";
import {FiTruck} from "react-icons/fi"

const ProductPriceAndShipmentInfo = () => {
  return (
      <div className="product-price-and-shipment-info">
          <div className="product-total-price-title">
              <p>Toplam</p>
          </div>
          <div className="product-price-and-shipment">
              <p className="price">300.000,00 TL</p>
              <div className="shipment">
                  <p><span className="truck-icon"><FiTruck/></span> Kargo Ücreti: <span className="shipment-type">Alıcı Öder</span></p>
              </div>
          </div>
      </div>
  )
};

export default ProductPriceAndShipmentInfo;