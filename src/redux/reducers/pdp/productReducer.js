import productDetailsStaticData from "../../../statics/product-detail-static-data"

const initialState = {
    productTitle : "",
    selectableAttributes : [],
    productVariants : [],
    baremList: [],
    initialVariant: {},
    activeImage: "",
    activeVariant: null,
    selectedCount: null
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
        case productDetailsStaticData.reduxActions.SET_INITIAL_VARIANT:
            state = {
                ...state,
                initialVariant: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_ACTIVE_VARIANT:
            state = {
                ...state,
                activeVariant: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_ACTIVE_IMAGE:
            state = {
                ...state,
                activeImage: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_SELECTED_COUNT:
            state = {
                ...state,
                selectedCount: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default productDetailReducer;