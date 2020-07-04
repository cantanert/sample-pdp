import React from "react";
import ProductMainImage from "../product-main-image/ProductMainImage";
import ProductThumbnailImages from "../product-thumbnail-images/ProductThumbnailImages";

const ProductImages = () => {
    return(
        <div className="product-images-wrapper">
            <ProductMainImage/>
            <ProductThumbnailImages/>
        </div>
    )
};

export default ProductImages;