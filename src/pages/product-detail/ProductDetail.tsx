import React from 'react';

//  components
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

//  data
import {detailPath} from "./productDetailData";

const ProductDetail = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                      <Breadcrumb path={detailPath}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
