import React, {useState} from "react";


const SelectableAttribute = (props) => {

    const [activeIndex,setActiveIndex] = useState(0);

    const optionClickHandler = (index) => {
        setActiveIndex(index);
    };

    const selectableAttributeOptionRenderer = (options) => {
        return  options.map((option,index)=>{
            return (
                <button
                    className={"option " + (index === activeIndex ? "selected" : "")}
                    onClick={() => optionClickHandler(index)}>
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

export default SelectableAttribute;