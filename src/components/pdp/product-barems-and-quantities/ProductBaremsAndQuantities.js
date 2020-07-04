import React from "react";

const ProductBaremsAndQuantities = () => {
    return (
        <div className="product-barems-and-quantity">
            <div className="product-barems">
                <div className="barem-prices-title">
                    <p>Toptan Fiyat</p>
                    <p>(Adet)</p>
                </div>
                <div className="barem-prices-wrapper">
                    <div className="barem-price">
                        <p>100 - 199</p>
                        <p>1300 TL</p>
                    </div>
                    <div className="barem-price selected">
                        <p>200 - 299</p>
                        <p>880 TL</p>
                    </div>
                    <div className="barem-price">
                        <p>300 - 399</p>
                        <p>550 TL</p>
                    </div>
                    <div className="barem-price">
                        <p>300 - 399</p>
                        <p>550 TL</p>
                    </div>
                    <div className="barem-price">
                        <p>300 - 399</p>
                        <p>550 TL</p>
                    </div>
                    <div className="barem-price">
                        <p>300 - 399</p>
                        <p>550 TL</p>
                    </div>
                    <div className="barem-price">
                        <p>300 - 399</p>
                        <p>550 TL</p>
                    </div>
                    <div className="barem-price">
                        <p>300 - 399</p>
                        <p>550 TL</p>
                    </div>
                </div>
            </div>
            <div className="product-quantity">
                <div className="product-quantity-title">
                    <p>Adet</p>
                </div>
                <div className="product-quantity-input">
                    <input type="text"/>
                    <span>Adet</span>
                    <span className="stock-quantity">Stok Adedi : <strong>600</strong></span>
                </div>
            </div>
        </div>
    )
};

export default ProductBaremsAndQuantities;