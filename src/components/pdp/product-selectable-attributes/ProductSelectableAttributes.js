import React from "react";

const ProductSelectableAttributes = () => {
    return (
        <div className="product-selectable-attributes">
            <div className="selectable-attribute">
                <div className="attribute-name">
                    <span>Hafıza</span>
                </div>
                <div className="attribute-options">
                    <div className="option selected">
                        <p>64 GB</p>
                        <p>Ücretsiz</p>
                    </div>
                    <div className="option">
                        <p>128 GB</p>
                        <p>Ücretsiz</p>
                    </div>
                    <div className="option">
                        <p>256 GB</p>
                    </div>
                </div>
            </div>
            <div className="selectable-attribute">
                <div className="attribute-name">
                    <span>Renk</span>
                </div>
                <div className="attribute-options">
                    <div className="option">
                        <p>Rose Gold</p>
                    </div>
                    <div className="option selected">
                        <p>Black</p>

                    </div>
                    <div className="option">
                        <p>Silver</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductSelectableAttributes;