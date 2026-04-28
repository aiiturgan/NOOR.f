import { useState } from 'react'

function ProductCard({ product, addToCart }) {
  const [size, setSize] = useState('S')

  return (
    <div style={{
      border: '1px solid #eee',
      padding: '15px',
      borderRadius: '15px',
      background: '#fff',
      position: 'relative',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
    }}>
      <span style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: '#c9a96e'
      }}>
        ♡ 🌙
      </span>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          borderRadius: '10px',
          background: '#fdfaf6'
        }}
      />

      <h3 style={{ fontSize: '16px' }}>{product.name}</h3>

      <p style={{ color: '#c9a96e', fontWeight: 'bold' }}>
        {product.price} сом
      </p>

      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        style={{
          marginBottom: '10px',
          padding: '7px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          width: '100%'
        }}
      >
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>

      <button
        onClick={() => addToCart({ ...product, size })}
        style={{
          background: '#c9a96e',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '10px',
          width: '100%'
        }}
      >
        В корзину
      </button>
    </div>
  )
}

export default ProductCard