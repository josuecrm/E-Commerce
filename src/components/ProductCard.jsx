import "../styles/productcard.css";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ productInfo, onClick }) => {
  return (
    <article onClick={onClick} className="product-card">
      <div className="image-card-container">
        <img className="image-card" src={productInfo.productImgs[0]} alt="" />
      </div>
      <div className="product-info">
        <p className="product-name"> {productInfo.title} </p>
        <p className="price"> Price </p>
        <p className="price-number"> ${productInfo.price} </p>
      </div>
      <button className="button-add">
        <FaCartPlus />
      </button>
    </article>
  );
};

export default ProductCard;
