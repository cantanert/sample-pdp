import React from "react";
import ProductMainImage from "./ProductMainImage";
import ProductThumbnailImages from "./ProductThumbnailImages";

const ProductImages = () => {
    return(
        <div className="product-images-wrapper">
            <ProductMainImage/>
            <ProductThumbnailImages/>
        </div>
    )
};

export default ProductImages;