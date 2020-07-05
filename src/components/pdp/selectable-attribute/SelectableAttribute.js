import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import pdpStaticData from "../../../statics/product-detail-static-data";
import {
    setSelectedSizeActionCreator,
    setSelectedColorActionCreator,
    setAvailableSizesActionCreator,
    setActiveSizeIndexActionCreator,
    setActiveColorIndexActionCreator
} from "../../../redux/actions/pdp/productActions";


const SelectableAttribute = (props) => {


    let {activeVariant, productVariants, availableSizes, activeColorIndex, activeSizeIndex } = props.productDetailState;

    useEffect(()=>{
        activeAttributeChecker();
    },[]);

    useEffect(()=>{

    },[])

    const activeAttributeChecker = () => {
        if(activeVariant){
            props.children.values.forEach((item,index)=>{
                for(let elem of activeVariant.attributes){
                    if(elem.name === props.children.name && elem.value === item){
                        props.setActiveColorIndex(index);
                        setSelectedAttributes(elem.name,item)
                    }
                }
            });
        }
    };

    const setSelectedAttributes = (attr,value) => {
        if(pdpStaticData.attributes.COLOR === attr){
            props.setSelectedColor(value);
        }
    };

    const getAvaliableSizes = (color) => {
        let selectedColorsVariants = [];
        productVariants.forEach((variant) => {
            for (let attribute of variant.attributes){
                if (attribute.name === pdpStaticData.attributes.COLOR && attribute.value === color){
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

        props.setAvailableSizes(availableSizes);
    };


    const colorOptionClickHandler = (event,index) => {
        if( !event.target.classList.contains(pdpStaticData.classNames.SELECTED) ){
            props.setSelectedColor(event.target.textContent);
            props.setSelectedSize(null);
            getAvaliableSizes(event.target.textContent);
        }
        props.setActiveColorIndex(index);
        props.setActiveSizeIndex(null)
    };

    const sizeOptionClickHandler = (event,index) => {
        if(!event.target.classList.contains(pdpStaticData.classNames.SELECTED)){
            props.setSelectedSize(event.target.textContent);
        }
        props.setActiveSizeIndex(index);
    };

    const isDisabled = (option) => {
        return !availableSizes.includes(option);
    };

    const selectableAttributeOptionRenderer = (attribute,options) => {
        if(attribute === pdpStaticData.attributes.COLOR){
            return  options.map((option,index)=>{
                return (
                    <button
                        className={"option " + (index === activeColorIndex ? "selected" : "")}
                        onClick={(e) => colorOptionClickHandler(e,index)}
                        key={index}
                    >
                        {option}
                    </button>
                );
            });
        } else {

            return  options.map((option,index)=>{
                return (
                    <button
                        className={"option " + (index === activeSizeIndex ? "selected" : "")}
                        onClick={(e) => sizeOptionClickHandler(e,index)}
                        key={index}
                        disabled={(!availableSizes.includes(option))}
                    >
                        {option}
                    </button>
                );
            });
        }
    };

    return (
        <div className="selectable-attribute">
            <div className="attribute-name">
                <span>{ props.children.name }</span>
            </div>
            <div className="attribute-options">
                {selectableAttributeOptionRenderer(props.children.name, props.children.values)}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        productDetailState : state.productDetailReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setSelectedSize: (variant) => {
            dispatch(setSelectedSizeActionCreator(variant));
        },
        setSelectedColor: (variant) => {
            dispatch(setSelectedColorActionCreator(variant));
        },
        setAvailableSizes: (sizes) => {
            dispatch(setAvailableSizesActionCreator(sizes));
        },
        setActiveColorIndex: (index) => {
            dispatch(setActiveColorIndexActionCreator(index))
        },
        setActiveSizeIndex: (index) => {
            dispatch(setActiveSizeIndexActionCreator(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectableAttribute);