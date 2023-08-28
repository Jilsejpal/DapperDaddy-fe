import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension"
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from "./reducers/productReducer";
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/UserReducer";
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, cancelOrderReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";
import { bannerDeleteReducer, bannerDetailsReducer, bannerReducer, bannerUpdateReducer, newBannerReducer } from "./reducers/bannerReducer";
import { couponCreateReducer, couponDeleteReducer, couponGetAllReducer, couponReducer } from "./reducers/couponReducer";



const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,

    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    cancelOrder: cancelOrderReducer,

    newReview: newReviewReducer,
    newProduct: newProductReducer,
    product: productReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,

    banners: bannerReducer,
    banner: bannerDeleteReducer,
    newBanner: newBannerReducer,
    updateBanner: bannerUpdateReducer,
    bannerDetails: bannerDetailsReducer,


    applycoupon: couponReducer,
    createCoupon: couponCreateReducer,
    couponGetAll: couponGetAllReducer,
    deleteCoupon: couponDeleteReducer,

})


let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
    newOrder: {
        order: {},
        success: false,
    },
};

const middleware = [thunk];



const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));



export default store;