import React from "react";

const ProductImages = () => {
    return(
        <div className="product-images-wrapper">
            <div className="main-image">
                <img src="https://via.placeholder.com/500x500" width="100%"/>
            </div>
            <div className="thumbnail-images">
                <div className="thumbnail">
                    <img src="https://via.placeholder.com/500x500" width="100%"/>
                </div>
                <div className="thumbnail">
                    <img src="https://via.placeholder.com/500x500" width="100%"/>
                </div>
                <div className="thumbnail">
                    <img src="https://via.placeholder.com/500x500" width="100%"/>
                </div>
                <div className="thumbnail">
                    <img src="https://via.placeholder.com/500x500" width="100%"/>
                </div>
                <div className="thumbnail">
                    <img src="https://via.placeholder.com/500x500" width="100%"/>
                </div>
            </div>
        </div>
    )
};

export default ProductImages;