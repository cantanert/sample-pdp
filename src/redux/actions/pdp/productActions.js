import productStaticData from "../../../statics/product-detail-static-data";


export const setTitleActionCreator = (title) => {
    return {
        type: productStaticData.reduxActions.SET_PRODUCT_TITLE,
        payload: title
    }
};

export const setSelectableAttributesActionCreator = (attributes) => {
    return {
        type: productStaticData.reduxActions.SET_SELECTABLE_ATTRIBUTES,
        payload: attributes
    }
};

export const setProductVariantsActionCreator = (variants) => {
    return {
        type: productStaticData.reduxActions.SET_PRODUCT_VARIANTS,
        payload: variants
    }
};

export const setBaremListActionCreator = (barems) => {
    return {
        type: productStaticData.reduxActions.SET_BAREM_LIST,
        payload: barems
    }
};

export const setActiveVariantActionCreator = (variant) => {
    return {
        type: productStaticData.reduxActions.SET_ACTIVE_VARIANT,
        payload: variant
    }
};
