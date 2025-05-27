import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Failed to load product", err));
  }, [id]);

  const handleAddToCart = () => {
    axios.post('http://localhost:5000/api/cart', product)
      .then(() => alert('Product added to cart!'))
      .catch(() => alert('Failed to add to cart.'));
  };

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <h3>${product.price}</h3>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
