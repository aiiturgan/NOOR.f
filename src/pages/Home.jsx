import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function Home({ addToCart }) {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('Все')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const names = [
          'Хиджаб Silk Noor',
          'Абайя Elegant',
          'Платье Modest Queen',
          'Химар Premium',
          'Платок Classic',
          'Никаб Black Noor',
        ]

        const categories = [
          'Платки',
          'Одежда',
          'Одежда',
          'Платки',
          'Платки',
          'Одежда',
        ]

        const formatted = data.slice(0, 12).map((item, index) => {
          return {
            id: item.id,
            name: names[index % names.length],
            price: Math.floor(item.price * 100),
            category: categories[index % categories.length],
            image: item.image,
          }
        })

        setProducts(formatted)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const filteredProducts =
    category === 'Все'
      ? products
      : products.filter((item) => item.category === category)

  return (
    <div style={{ padding: '20px' }}>
      <h1>NOOR 🤍</h1>

      <p style={{ color: '#c9a96e' }}>
        Скромность — это красота мусульманки 🌙
      </p>

      <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
        {['Все', 'Платки', 'Одежда'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              background: category === cat ? '#c9a96e' : '#fff',
              color: category === cat ? '#fff' : '#333',
              border: '1px solid #eee',
              padding: '8px 15px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Загрузка товаров...</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home