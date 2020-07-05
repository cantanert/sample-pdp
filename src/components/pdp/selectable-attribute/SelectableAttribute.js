import React, {useState, useEffect} from "react";
import {connect} from "react-redux"


const SelectableAttribute = (props) => {

    const [activeIndex,setActiveIndex] = useState(null);

    let {activeVariant} = props.productDetailState;

    useEffect(()=>{
        activeAttributeChecker();
    },[]);

    const activeAttributeChecker = () => {
        if(activeVariant){
            props.children.values.forEach((item,index)=>{
                for(let elem of activeVariant.attributes){
                    if(elem.name === props.children.name && elem.value === item){
                        setActiveIndex(index);
                    }
                }
            });
        }
    };
    const optionClickHandler = (index) => {
        setActiveIndex(index);
    };

    const selectableAttributeOptionRenderer = (options) => {
        return  options.map((option,index)=>{
            return (
                <button
                    className={"option " + (index === activeIndex ? "selected" : "")}
                    onClick={() => optionClickHandler(index)}
                    key={index}>
                    {option}
                </button>
            );
        });
    };

    return (
        <div className="selectable-attribute">
            <div className="attribute-name">
                <span>{ props.children.name }</span>
            </div>
            <div className="attribute-options">
                {selectableAttributeOptionRenderer(props.children.values)}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        productDetailState : state.productDetailReducer
    }
};

export default connect(mapStateToProps)(SelectableAttribute);