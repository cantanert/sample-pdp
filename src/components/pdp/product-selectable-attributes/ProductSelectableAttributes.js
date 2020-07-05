import React from "react";
import {connect} from 'react-redux';
import SelectableAttribute from "../selectable-attribute/SelectableAttribute";

const ProductSelectableAttributes = (props) => {

    let {selectableAttributes} = props.productDetailState;

    const selectableAttributeRenderer = (attributes) => {
        return attributes.map((attr,index) => {
            return (
                <SelectableAttribute key={index}>{attr}</SelectableAttribute>
            )
        });
    };

    return (
        <div className="product-selectable-attributes">
            {selectableAttributeRenderer(selectableAttributes)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productDetailState : state.productDetailReducer
    }
};

export default connect(mapStateToProps)(ProductSelectableAttributes);