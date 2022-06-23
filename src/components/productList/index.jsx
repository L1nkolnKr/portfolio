import React from 'react';
import"./productList.css"
import Product from "../product";
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="p">
            <div className="p-text">
                <h1 className="p-title">Its Alex</h1>
                <p className="p p-desc">Description</p>
            </div>
            <div className="p-list">
                {products.map((item)=>
                    <Product
                        img={item.img}
                        key={item.id}
                        link={item.link}/>)}
            </div>
        </div>
    );
};

export default ProductList;