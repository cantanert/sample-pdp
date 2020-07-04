import React from "react";
import ProductContentHeader from "../product-content-header/ProductContentHeader";
import ProductMinMaxInformations from "../product-min-max-informations/ProductMinMaxInformations";
import ProductSelectableAttributes from "../product-selectable-attributes/ProductSelectableAttributes";
import ProductBaremsAndQuantities from "../product-barems-and-quantities/ProductBaremsAndQuantities";
import ProductPriceAndShipmentInfo from "../product-price-and-shipment-info/ProductPriceAndShipmentInfo";

const ProductContent = () => {
    return (
        <div className="product-content-wrapper">
            <ProductContentHeader/>
            <ProductMinMaxInformations/>
            <ProductSelectableAttributes/>
            <ProductBaremsAndQuantities/>
            <ProductPriceAndShipmentInfo/>
        </div>
    )
};

export default ProductContent;