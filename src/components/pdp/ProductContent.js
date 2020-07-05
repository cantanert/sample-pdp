import React from "react";
import ProductContentHeader from "./ProductContentHeader";
import ProductMinMaxInformations from "./ProductMinMaxInformations";
import ProductSelectableAttributes from "./ProductSelectableAttributes";
import ProductBaremsAndQuantities from "./ProductBaremsAndQuantities";
import ProductPriceAndShipmentInfo from "./ProductPriceAndShipmentInfo";

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