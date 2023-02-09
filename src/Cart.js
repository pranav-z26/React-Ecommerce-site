import Header from "./header.js";
import React from 'react';
<Header />
const Cart = ({ newArray }) => {
    console.log('from carrrrrrrrrrrrrrrrrrrrrrrrrrrrt', newArray)
    return (
        <>
            <div className="product_outline">
                <div className="product_title">{newArray.name}</div>
                <div className="product_image">
                    <img className="product_image_inside" src={newArray.image} />
                </div>

                <div className="product_dsc">
                    {newArray.description}
                </div>
                <div className="pnb">
                    <div className="product_price">
                        Price: {newArray.price}/-
                    </div>
                </div>

            </div>
        </>
    );
}

export { Cart };