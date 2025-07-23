import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => alert('Product not found'));
  }, [id]);

  const handleEdit = () => {
    axios.put(`http://localhost:3001/products/${id}`, product)
      .then(res => {
        setProduct(res.data);
        setEditing(false);
      })
      .catch(() => alert('Error updating product'));
  };

  if (!product) return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fefefe'
    }}>
      {editing ? (
        <>
          <h2>Edit Product</h2>
          <input value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
          <input value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
          <input value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
          <input value={product.currentPrice} onChange={e => setProduct({ ...product, currentPrice: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
          <input value={product.image} onChange={e => setProduct({ ...product, image: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleEdit} style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px'
            }}>Save</button>

            <button onClick={() => setEditing(false)} style={{
              padding: '8px 16px',
              backgroundColor: '#95a5a6',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ color: '#333' }}>{product.name}</h2>
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
              marginBottom: '1rem'
            }}
          />
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Original Price:</strong> {product.price}</p>
          <p><strong>Current Price:</strong> {product.currentPrice}</p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={() => setEditing(true)} style={{
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}>Edit</button>
          </div>
        </>
      )}

      <button onClick={() => navigate('/')} style={{
        marginTop: '1rem',
        padding: '8px 16px',
        backgroundColor: '#34495e',
        color: '#fff',
        border: 'none',
        borderRadius: '4px'
      }}>Back</button>
    </div>
  );
}

export default ProductDetail;
