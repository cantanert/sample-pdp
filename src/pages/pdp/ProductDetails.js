import React from "react";
import ProductImages from "../../components/pdp/product-images/ProductImages";
import ProductContent from "../../components/pdp/product-content/ProductContent";

class ProductDetails extends React.Component{
    render() {
        return (
            <div className="product-details-wrapper container">
                <ProductImages/>
                <ProductContent/>
            </div>
        );
    }
}

export default ProductDetails;