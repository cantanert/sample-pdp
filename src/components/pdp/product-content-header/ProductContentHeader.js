import React from "react";
import { FaStar } from 'react-icons/fa';


const ProductContentHeader = () => {
    return (
        <div className="product-content-header">
            <p className="product-title">İş Tulumu Bahçıvan Tip Askılı</p>
            <div className="product-interactions">
                <span className="product-comment-count">
                    <span className="product-overall">
                        <FaStar />
                        <FaStar/>
                        <FaStar/>
                    </span>
                    23 Yorum
                </span>
            </div>

        </div>
    )
};

export default ProductContentHeader;