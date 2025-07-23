// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showManageList, setShowManageList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => setProducts(res.data))
      .catch(() => alert('Error fetching data'));
  }, []);

  const handleAdd = () => {
    const newId = form.id.trim() || Date.now().toString();
    const idExists = products.some(p => p.id.toString() === newId);
    if (idExists) {
      alert('ID này đã tồn tại. Vui lòng chọn ID khác.');
      return;
    }

    const newProduct = {
      id: newId,
      name: form.name.trim(),
      description: form.description.trim(),
      price: form.price.trim(),
      currentPrice: form.currentPrice.trim(),
      image: form.image.trim()
    };

    axios.post('http://localhost:3001/products', newProduct)
      .then(res => {
        setProducts([...products, res.data]);
        setForm({ id: '', name: '', description: '', price: '', currentPrice: '', image: '' });
        setShowForm(false);
      })
      .catch(() => alert('Lỗi khi thêm sản phẩm'));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`)
      .then(() => setProducts(products.filter(p => p.id !== id)))
      .catch(() => alert('Error deleting'));
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#1e1e2f', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '2rem' }}>Product List</h2>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button onClick={() => setShowManageList(!showManageList)} style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          marginRight: '1rem'
        }}>
          {showManageList ? 'Hide Management' : 'Show Management'}
        </button>

        <button onClick={() => setShowForm(!showForm)} style={{
          padding: '10px 20px',
          backgroundColor: '#2ecc71',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          {showForm ? 'Close' : '+ Add Product'}
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img
              src={`/images/${p.image}`}
              alt={p.name}
              style={{ width: '100%', height: '150px', objectFit: 'contain', marginBottom: '1rem' }}
            />
            <h4 style={{ textAlign: 'center', color: '#c0392b' }}>{p.name}</h4>
            <p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'center' }}>{p.description}</p>
            <p style={{ textDecoration: 'line-through', color: '#999', margin: '0.5rem 0' }}>{p.price} đ</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#e74c3c' }}>{p.currentPrice} đ</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button onClick={() => navigate(`/products/${p.id}`)} style={{
                backgroundColor: '#8e44ad',
                color: '#fff',
                padding: '6px 12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Detail</button>
              {showManageList && (
                <>
                  <button onClick={() => navigate(`/products/${p.id}`)} style={{
                    backgroundColor: '#2980b9',
                    color: '#fff',
                    padding: '6px 12px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>Edit</button>
                  <button onClick={() => handleDelete(p.id)} style={{
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    padding: '6px 12px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div style={{ marginTop: '2rem', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', maxWidth: '600px', marginInline: 'auto' }}>
          <h3 style={{ marginBottom: '1rem' }}>Add Product</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input placeholder="ID (string)" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} />
            <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <input placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
            <input placeholder="Current Price" value={form.currentPrice} onChange={e => setForm({ ...form, currentPrice: e.target.value })} />
            <input placeholder="Image" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
            <button onClick={handleAdd} style={{
              marginTop: '0.5rem',
              padding: '6px 12px',
              backgroundColor: '#2ecc71',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
