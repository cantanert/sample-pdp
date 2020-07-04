import React from "react";
import {connect} from 'react-redux';
import SelectableAttribute from "../selectable-attribute/SelectableAttribute";

const ProductSelectableAttributes = (props) => {

    let {selectableAttributes} = props.productDetailState;

    const selectableAttributeOptionRenderer = (options) => {
      return  options.map((option,index)=>{
          if(index === 0) {
              return (
                  <button className="option selected">{option}</button>
              )
          } else {
              return (
                  <button className="option">{option}</button>
              )
          }

      });
    };

    const selectableAttributeRenderer = (attributes) => {
        return attributes.map((attr) => {
            return (
                <SelectableAttribute>{attr}</SelectableAttribute>
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