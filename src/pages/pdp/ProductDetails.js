import React from "react";
import ProductImages from "../../components/pdp/ProductImages";
import ProductContent from "../../components/pdp/ProductContent";
import mockedProductResponse from "../../statics/mocked-product-response";
import {connect} from 'react-redux';

import {
    setTitleActionCreator,
    setSelectableAttributesActionCreator,
    setProductVariantsActionCreator,
    setBaremListActionCreator,
    setInitialVariantActionCreator,
    setActiveVariantActionCreator,
    setActiveImageActionCreator,
    setQuantityBaremMaxActionCreator,
    setQuantityBaremMinActionCreator,
    setAvailableSizesActionCreator,
    setPriceBaremMax,
    setPriceBaremMin,
    setMinSaleQuantity
} from "../../redux/actions/pdp/productActions";
import pdpStaticData from "../../statics/product-detail-static-data";

class ProductDetails extends React.Component{

    getMockedResponseAndInitializeState = () => {
        let {productTitle,selectableAttributes,productVariants,baremList,activeVariant} = mockedProductResponse;
        this.props.setTitle(productTitle);
        this.props.setSelectableAttributes(selectableAttributes);
        this.props.setProductVariants(productVariants);
        this.props.setBaremList(baremList);
        this.props.setInitialVariant(productVariants[0]);
        this.props.setActiveImage(productVariants[0].images[0]);
        if(!this.props.productDetailState.activeVariant){
            this.props.setActiveVariant(productVariants[0]);
        }
        this.quantityBaremMinMaxChecker(baremList);
        let selectedColorsVariants = [];
        productVariants.forEach((variant) => {
            for (let attribute of variant.attributes){
                if (attribute.name === pdpStaticData.attributes.COLOR && attribute.value === productVariants[0].attributes[1].value){
                    selectedColorsVariants.push(variant);
                }
            }
        });

        let availableSizes = [];
        for (let element of selectedColorsVariants){
            for (let attr of  element.attributes){
                if(attr.name === pdpStaticData.attributes.SIZE){
                    availableSizes.push(attr.value);
                }
            }
        }

        this.props.setAvailableSizes(availableSizes);
    };

    quantityBaremMinMaxChecker = (baremList) => {
        baremList.forEach((item, index)=>{
            if (index === 0) {
                this.props.setQuantityBaremMin(item.minimumQuantity);
                this.props.setPriceBaremMin(item.price);
                this.props.setMinSaleQuantity(item.minimumQuantity);
            } else if(baremList.length === index+1){
                this.props.setQuantityBaremMax(item.maximumQuantity);
                this.props.setPriceBaremMax(item.price)
            }
        });
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
        },
        setQuantityBaremMin: (barem) => {
            dispatch(setQuantityBaremMinActionCreator(barem))
        },
        setQuantityBaremMax: (barem) => {
            dispatch(setQuantityBaremMaxActionCreator(barem))
        },
        setAvailableSizes: (sizes) => {
            dispatch(setAvailableSizesActionCreator(sizes))
        },
        setPriceBaremMin: price => {
            dispatch(setPriceBaremMin(price))
        },
        setPriceBaremMax: price => {
            dispatch(setPriceBaremMax(price))
        },
        setMinSaleQuantity: (quantity) => {
            dispatch(setMinSaleQuantity(quantity))
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);