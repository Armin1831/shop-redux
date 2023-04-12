import React from 'react';

//  components
import ReviewStars from "../review-stars/ReviewStars";
import ProductOptions from "../product-options/ProductOptions";
import ProductQuantityButton from "../product-quantity-button/ProductQuantityButton";

const ProductInfo = () => {
    return (
        <div className="h-100 bg-light p-30">
            <h3>Product Name Goes Here</h3>
            <div className="mb-3">
                <ReviewStars/>
            </div>
            <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
            <p className="mb-4">
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam
                stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor
                no sea Nonumy
            </p>
            <div className="mb-3">
                <ProductOptions/>
            </div>
            <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                <form>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="color-1"
                            name="color"
                        />
                        <label className="custom-control-label" htmlFor="color-1">
                            Black
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="color-2"
                            name="color"
                        />
                        <label className="custom-control-label" htmlFor="color-2">
                            White
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="color-3"
                            name="color"
                        />
                        <label className="custom-control-label" htmlFor="color-3">
                            Red
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="color-4"
                            name="color"
                        />
                        <label className="custom-control-label" htmlFor="color-4">
                            Blue
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="color-5"
                            name="color"
                        />
                        <label className="custom-control-label" htmlFor="color-5">
                            Green
                        </label>
                    </div>
                </form>
            </div>
            <div className="d-flex align-items-center mb-4 pt-2">
                <ProductQuantityButton/>
                <button className="btn btn-primary px-3 ml-3">
                    <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
