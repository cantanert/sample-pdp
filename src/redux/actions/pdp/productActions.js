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

export const setInitialVariantActionCreator = (variant) => {
    return {
        type: productStaticData.reduxActions.SET_INITIAL_VARIANT,
        payload: variant
    }
};

export const setActiveVariantActionCreator = (imageURL) => {
    return {
        type: productStaticData.reduxActions.SET_ACTIVE_VARIANT,
        payload: imageURL
    }
};

export const setActiveImageActionCreator = (imageURL) => {
    return {
        type: productStaticData.reduxActions.SET_ACTIVE_IMAGE,
        payload: imageURL
    }
};

export const setSelectedCountActionCreator = (imageURL) => {
    return {
        type: productStaticData.reduxActions.SET_SELECTED_COUNT,
        payload: imageURL
    }
};

export const setSelectedColorActionCreator = (color) => {
    return {
        type: productStaticData.reduxActions.SET_SELECTED_COLOR,
        payload: color
    }
};

export const setSelectedSizeActionCreator = (size) => {
    return {
        type: productStaticData.reduxActions.SET_SELECTED_SIZE,
        payload: size
    }
};

export const setPiecePriceActionCreator = (price) => {
    return {
        type: productStaticData.reduxActions.SET_PIECE_PRICE,
        payload: price
    }
};

export const setQuantityBaremMinActionCreator = (price) => {
    return {
        type: productStaticData.reduxActions.SET_QUANTITY_BAREM_MIN,
        payload: price
    }
};

export const setQuantityBaremMaxActionCreator = (price) => {
    return {
        type: productStaticData.reduxActions.SET_QUANTITY_BAREM_MAX,
        payload: price
    }
};

export const setAvailableSizesActionCreator = (sizes) => {
    return {
        type: productStaticData.reduxActions.SET_AVAILABLE_SIZES,
        payload: sizes
    }
};

export const setActiveSizeIndexActionCreator = (size) => {
    return {
        type: productStaticData.reduxActions.SET_ACTIVE_SIZE_INDEX,
        payload: size
    }
};

export const setActiveColorIndexActionCreator = (color) => {
    return {
        type: productStaticData.reduxActions.SET_ACTIVE_COLOR_INDEX,
        payload: color
    }
};

export const setPriceBaremMin = (price) => {
    return {
        type: productStaticData.reduxActions.SET_PRICE_BAREM_MIN,
        payload: price
    }
};

export const setPriceBaremMax = (price) => {
    return {
        type: productStaticData.reduxActions.SET_PRICE_BAREM_MAX,
        payload: price
    }
};

export const setMinSaleQuantity = (quantity) => {
    return {
        type: productStaticData.reduxActions.SET_MIN_SALE_QUANTITY,
        payload: quantity
    }
};
