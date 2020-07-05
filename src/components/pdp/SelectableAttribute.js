import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import pdpStaticData from "../../statics/product-detail-static-data";
import {
    setSelectedSizeActionCreator,
    setSelectedColorActionCreator,
    setAvailableSizesActionCreator,
    setActiveSizeIndexActionCreator,
    setActiveColorIndexActionCreator,
    setActiveVariantActionCreator,
    setActiveImageActionCreator
} from "../../redux/actions/pdp/productActions";


const SelectableAttribute = (props) => {

    let { activeVariant,
        productVariants,
        availableSizes,
        activeColorIndex,
        activeSizeIndex,
        selectedColor } = props.productDetailState;

    useEffect(()=>{
        activeAttributeChecker();
    },[]);

    const activeAttributeChecker = () => {
        if(activeVariant){
            props.children.values.forEach((item,index)=>{
                for(let elem of activeVariant.attributes){
                    if(elem.name === pdpStaticData.attributes.COLOR && elem.value === item){
                        props.setActiveColorIndex(index);
                        setSelectedColorState(elem.name,item)
                    }
                }
            });
        }
    };

    const setSelectedColorState = (attr,value) => {
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
        updateActiveVariant(event.target.textContent);
    };

    const updateActiveVariant = (size) => {
        let colorAttributes = [];
        productVariants.forEach((variant) => {
            for (let attribute of variant.attributes) {
                if (attribute.name === pdpStaticData.attributes.COLOR && attribute.value === selectedColor) {
                    colorAttributes.push(variant);
                }
            }
        });

        for (let variant of colorAttributes){
            for(let attr of variant.attributes){
                if(attr.name === pdpStaticData.attributes.SIZE && attr.value === size){
                    props.setActiveVariant(variant);
                    props.setActiveImage(variant.images[0]);
                }
            }
        }
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
        },
        setActiveVariant: (variant) => {
            dispatch(setActiveVariantActionCreator(variant));
        },
        setActiveImage: (imageURL) => {
            dispatch(setActiveImageActionCreator(imageURL))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectableAttribute);