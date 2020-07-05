import React from "react";
import ProductImages from "../../components/pdp/ProductImages";
import ProductContent from "../../components/pdp/ProductContent";
import mockedProductResponse from "../../statics/mocked-product-response";
import {connect} from 'react-redux';
import pdpStaticData from "../../statics/product-detail-static-data";
import {setAvailableSizesActionCreator,} from "../../redux/actions/pdp/productActions";

class ProductDetails extends React.Component{

    getMockedResponseAndInitializeState = () => {
        let {productVariants} = mockedProductResponse;

        let selectedColorsVariants = [];
        for (let variant of productVariants){
            for (let attribute of variant.attributes){
                if (attribute.name === pdpStaticData.attributes.COLOR && attribute.value === productVariants[0].attributes[1].value){
                    selectedColorsVariants.push(variant);
                }
            }
        }

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
        setAvailableSizes: (sizes) => {
            dispatch(setAvailableSizesActionCreator(sizes))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);