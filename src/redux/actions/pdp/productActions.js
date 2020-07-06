import productStaticData from "../../../statics/product-detail-static-data";


export const setTitleActionCreator = (title) => {
    return {
        type: productStaticData.reduxActions.SET_PRODUCT_TITLE,
        payload: title
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
