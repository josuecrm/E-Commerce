import { useNavigate } from "react-router-dom";
import "../styles/purchasecard.css";

const PurchaseCard = ({ infoPurchase }) => {
  let d = new Date(infoPurchase.createdAt);

  const navigate = useNavigate();

  return (
    <article className="card-purchase">
      <div className="detail-purchase">
        <div className="date">{d.toLocaleDateString()}</div>
        <div className="order">Order #{infoPurchase.id}</div>
      </div>
      {infoPurchase.cart.products?.map((product, i) => (
        <div key={i} className="purchased-products">
          <div
            className="title"
            onClick={() =>
              navigate(`/products/${product.productsInCart.productId}`)
            }
          >
            {product.title}
          </div>
          <div className="quatity-wrapper">
            <div className="quantity">{product.productsInCart?.quantity}</div>
            <div className="price">${product.price}</div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default PurchaseCard;
