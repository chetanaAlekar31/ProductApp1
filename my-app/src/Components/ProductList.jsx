import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="product-list-container">
      <h2 className="product-heading">Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="view-button">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
