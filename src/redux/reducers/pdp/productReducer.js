import productDetailsStaticData from "../../../statics/product-detail-static-data"

const initialState = {
    productTitle : "",
    selectableAttributes : [],
    productVariants : [],
    baremList: [],
    initialVariant: {},
    activeImage: "",
    activeVariant: null,
    selectedCount: null,
    piecePrice: null,
    quantityBaremMin: null,
    quantityBaremMax: null,
    priceBaremMin: null,
    priceBaremMax: null,
    minSaleQuantity: null,
    selectedColor: null,
    selectedSize: null,
    availableSizes: [],
    activeColorIndex: null,
    activeSizeIndex: null,

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
        case productDetailsStaticData.reduxActions.SET_PIECE_PRICE:
            state = {
                ...state,
                piecePrice: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_QUANTITY_BAREM_MIN:
            state = {
                ...state,
                quantityBaremMin: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_QUANTITY_BAREM_MAX:
            state = {
                ...state,
                quantityBaremMax: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_SELECTED_COLOR:
            state = {
                ...state,
                selectedColor: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_SELECTED_SIZE:
            state = {
                ...state,
                selectedSize: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_AVAILABLE_SIZES:
            state = {
                ...state,
                availableSizes: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_ACTIVE_COLOR_INDEX:
            state = {
                ...state,
                activeColorIndex: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_ACTIVE_SIZE_INDEX:
            state = {
                ...state,
                activeSizeIndex: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_PRICE_BAREM_MIN:
            state = {
                ...state,
                priceBaremMin: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_PRICE_BAREM_MAX:
            state = {
                ...state,
                priceBaremMax: action.payload
            };
            break;
        case productDetailsStaticData.reduxActions.SET_MIN_SALE_QUANTITY:
            state = {
                ...state,
                minSaleQuantity: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default productDetailReducer;