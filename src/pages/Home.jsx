import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  filterByCategory,
  filterByProductName,
  getProducts,
} from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components";
import "../styles/Home.css";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  const getFilteredProducts = (e) => {
    e.preventDefault();
    dispatch(filterByProductName(searchTerm));
  };

  const getProductsByCategory = (id) => {
    dispatch(filterByCategory(id));
  };

  return (
    <div className="home-container">
      <div className="search-bar-container">
        <form className="search-bar">
          <input
            className="search"
            type="search"
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button
            className="button-search"
            type="submit"
            onClick={getFilteredProducts}
          >
            Search
          </button>
        </form>
      </div>

      <article className="categories-container">
        <div className="categories">
          <li
            className="button-categorie"
            onClick={() => dispatch(getProducts())}
          >
            All
          </li>
          {categories.map((categorie) => (
            <li
              onClick={() => getProductsByCategory(categorie.id)}
              className="button-categorie"
              key={categorie.id}
            >
              {categorie.name}
            </li>
          ))}
        </div>
      </article>

      <div className="products-container">
        <div className="cards">
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

export default Home;
