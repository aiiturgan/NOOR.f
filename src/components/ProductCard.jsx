import { useState } from 'react'

function ProductCard({ product, addToCart }) {
  const [size, setSize] = useState('S')

  const handleAdd = () => {
    addToCart({ ...product, size })
  }

  return (
    <article style={cardStyle}>
      <div style={imageBoxStyle}>
        <img src={product.image} alt={product.title} style={imageStyle} />
        <span style={categoryStyle}>{product.category}</span>
      </div>

      <div style={contentStyle}>
        <h3 style={titleStyle}>{product.title}</h3>

        <p style={descriptionStyle}>
          {product.description
            ? product.description.slice(0, 75)
            : 'Элегантный товар из коллекции NOOR'}
        </p>

        <div style={bottomStyle}>
          <b style={priceStyle}>{Math.round(product.price)} сом</b>

          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            style={selectStyle}
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <button onClick={handleAdd} style={buttonStyle}>
          Добавить в корзину
        </button>
      </div>
    </article>
  )
}

const cardStyle = {
  background: '#fff',
  borderRadius: '28px',
  overflow: 'hidden',
  boxShadow: '0 18px 45px rgba(99, 73, 39, 0.10)',
  border: '1px solid rgba(201, 169, 110, 0.15)',
}

const imageBoxStyle = {
  position: 'relative',
  height: '260px',
  overflow: 'hidden',
}

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}

const categoryStyle = {
  position: 'absolute',
  top: '14px',
  left: '14px',
  padding: '8px 13px',
  borderRadius: '999px',
  background: 'rgba(255, 255, 255, 0.86)',
  color: '#9b7b45',
  fontSize: '13px',
  fontWeight: '700',
}

const contentStyle = {
  padding: '18px',
}

const titleStyle = {
  margin: '0 0 8px',
  fontSize: '21px',
}

const descriptionStyle = {
  margin: 0,
  color: '#7a6b5d',
  lineHeight: '1.5',
  minHeight: '48px',
  fontSize: '14px',
}

const bottomStyle = {
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
}

const priceStyle = {
  fontSize: '20px',
  color: '#2f2a24',
}

const selectStyle = {
  border: '1px solid #eadcc8',
  borderRadius: '999px',
  padding: '9px 12px',
  background: '#fbf7ef',
  color: '#4a4035',
  outline: 'none',
}

const buttonStyle = {
  width: '100%',
  marginTop: '16px',
  border: 'none',
  padding: '13px',
  borderRadius: '999px',
  background: '#c9a96e',
  color: '#fff',
  fontWeight: '700',
  boxShadow: '0 12px 25px rgba(201, 169, 110, 0.25)',
}

export default ProductCard