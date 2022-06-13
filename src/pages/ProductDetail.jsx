import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../store/slices/products.slice";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/productdetail.css";
import { ProductCard, ImageSlider } from "../components";

const ProductDetail = () => {
  const [productItem, SetProductItem] = useState({});
  const [productImages, SetProductImages] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => {
        SetProductItem(res.data.data.product);
        SetProductImages(res.data.data.product.productImgs);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
      .then((res) => {
        const productSearched = res.data.data.products.find(
          (product) => product.id === Number(id)
        );
        console.log(productSearched);
        dispatch(filterByCategory(productSearched.category.id));
      });
  }, [id]);

  return (
    <div className="detail-container">
      <section className="about-product">
        <ImageSlider className="carousel" productImages={productImages} />
        <div className="info-detail">
          <h3>{productItem.title}</h3>
          <p className="description">{productItem.description}</p>
        </div>
      </section>
      <div className="similar-products">
        <h3>Similar Products</h3>
        <div className="similar-items">
          {products.map((product) => (
            <ProductCard
              onClick={() => navigate(`/products/${product.id}`)}
              key={product.id}
              productInfo={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
