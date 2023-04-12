import React from 'react';

const ProductOptions = () => {
    return (
        <div className="d-flex">
            <strong className="text-dark mr-3">Sizes:</strong>
            <form>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="size-1"
                        name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                        XS
                    </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="size-2"
                        name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                        S
                    </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="size-3"
                        name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                        M
                    </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="size-4"
                        name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                        L
                    </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="size-5"
                        name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                        XL
                    </label>
                </div>
            </form>
        </div>
    )
};

export default ProductOptions;