import React from "react";
import {connect} from "react-redux"
import {setActiveImageActionCreator, setTitleActionCreator} from "../../../redux/actions/pdp/productActions"

const ProductThumbnailImages = (props) => {

    let {initialVariant} = props.productDetailState;

    const thumbnailClickHandler = url => {
        props.setActiveImage(url);
    };

    const thumbnailImageRenderer = () => {
        return initialVariant.images.map((url,index)=>{
            return (
                <div className="thumbnail" key={index}>
                    <img src={url} width="100%" onClick={() => thumbnailClickHandler(url)}/>
                </div>
            )
        });
    };

    return (
        <div className="product-thumbnail-images">
            {thumbnailImageRenderer()}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productDetailState : state.productDetailReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveImage: (imageURL) => {
            dispatch(setActiveImageActionCreator(imageURL))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductThumbnailImages);