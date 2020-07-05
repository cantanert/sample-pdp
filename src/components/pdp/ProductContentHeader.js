import React from "react";
import { FaStar } from 'react-icons/fa';
import {connect} from 'react-redux';

const ProductContentHeader = (props) => {
    return (
        <div className="product-content-header">
            <p className="product-title">{props.productDetailState.productTitle}</p>
            <div className="product-interactions">
                <span className="product-comment-count">
                    <span className="product-overall">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </span>
                    23 Yorum
                </span>
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productDetailState : state.productDetailReducer
    }
};

export default connect(mapStateToProps)(ProductContentHeader);