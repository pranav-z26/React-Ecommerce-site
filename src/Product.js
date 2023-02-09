import React from 'react';
const Product = ({ myproduct, handleArrayChange }) => {
  function addtoCart() {
    handleArrayChange(myproduct)
  }
  return (
    <div className="product_outline">
      <div className="product_title">{myproduct.name}</div>
      <div className="product_image">
        <img className="product_image_inside" src={myproduct.images[0].url} />
      </div>

      <div className="product_dsc">
        {myproduct.description}
      </div>
      <div className="pnb">
        <div className="product_price">
          Price: {myproduct.price}/-
        </div>

        <button type="button" onClick={addtoCart} className="btn">Add to cart</button>
      </div>

    </div>
  );
};

export default Product;
