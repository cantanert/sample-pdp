import productDetailsStaticData from "../../../statics/product-detail-static-data"

const initialState = {
    productTitle : "",
    selectableAttributes : [],
    productVariants : [],
    baremList: []
};

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case productDetailsStaticData.reduxActions.SET_PRODUCT_TITLE:
            state = {
                ...state,
                productTitle: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_SELECTABLE_ATTRIBUTES:
            state = {
                ...state,
                selectableAttributes: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_PRODUCT_VARIANTS:
            state = {
                ...state,
                productVariants: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_BAREM_LIST:
            state = {
                ...state,
                baremList: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default productDetailReducer;