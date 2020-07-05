import React from "react";
import ProductImages from "../../components/pdp/product-images/ProductImages";
import ProductContent from "../../components/pdp/product-content/ProductContent";
import mockedProductResponse from "../../statics/mocked-product-response";
import {connect} from 'react-redux';

import {
    setTitleActionCreator,
    setSelectableAttributesActionCreator,
    setProductVariantsActionCreator,
    setBaremListActionCreator,
    setInitialVariantActionCreator,
    setActiveVariantActionCreator,
    setActiveImageActionCreator
} from "../../redux/actions/pdp/productActions";

class ProductDetails extends React.Component{

    getMockedResponseAndInitializeState = () => {
        let {productTitle,selectableAttributes,productVariants,baremList} = mockedProductResponse;
        this.props.setTitle(productTitle);
        this.props.setSelectableAttributes(selectableAttributes);
        this.props.setProductVariants(productVariants);
        this.props.setBaremList(baremList);
        this.props.setInitialVariant(productVariants[0]);
        this.props.setActiveImage(productVariants[0].images[0]);
        if(!this.props.productDetailState.activeVariant){
            this.props.setActiveVariant(productVariants[0]);
        }
    };


    render() {
        return (
            <div className="product-details-wrapper container">
                <ProductImages/>
                <ProductContent/>
            </div>
        );
    }

    componentWillMount() {
        this.getMockedResponseAndInitializeState();
    }
}

const mapStateToProps = (state) => {
    return {
        productDetailState: state.productDetailReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (title) => {
            dispatch(setTitleActionCreator(title))
        },
        setSelectableAttributes: (attributes) => {
            dispatch(setSelectableAttributesActionCreator(attributes))
        },
        setProductVariants: (variants) => {
            dispatch(setProductVariantsActionCreator(variants))
        },
        setBaremList: (barems) => {
            dispatch(setBaremListActionCreator(barems))
        },
        setInitialVariant: (variant) => {
            dispatch(setInitialVariantActionCreator(variant))
        },
        setActiveVariant: (variant) => {
            dispatch(setActiveVariantActionCreator(variant))
        },
        setActiveImage: (imageURL) => {
            dispatch(setActiveImageActionCreator(imageURL))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);