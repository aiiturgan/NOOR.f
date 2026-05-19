import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function Home({ addToCart }) {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('Все')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 8)))
      .catch(error => console.log(error))
  }, [])

  const localProducts = [
    {
      id: 101,
      title: 'Elegant Hijab',
      price: 1200,
      category: 'Платки',
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80',
      description: 'Мягкий платок для повседневного образа',
    },
    {
      id: 102,
      title: 'Modest Dress',
      price: 3500,
      category: 'Платья',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
      description: 'Элегантное платье в спокойном стиле',
    },
    {
      id: 103,
      title: 'Prayer Dress',
      price: 2800,
      category: 'Намазники',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80',
      description: 'Удобный намазник из приятной ткани',
    },
    {
      id: 104,
      title: 'Classic Bag',
      price: 1700,
      category: 'Сумки',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
      description: 'Минималистичная сумка для нежного образа',
    },
  ]

  const allProducts = [...localProducts, ...products]

  const filteredProducts =
    category === 'Все'
      ? allProducts
      : allProducts.filter(product => product.category === category)

  const categories = ['Все', 'Платки', 'Платья', 'Намазники', 'Сумки']

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <div style={heroTextStyle}>
          <span style={badgeStyle}>Скромность • Нежность • Стиль</span>

          <h1 style={titleStyle}>
            Элегантная мусульманская одежда для каждого дня
          </h1>

          <p style={subtitleStyle}>
            NOOR — это магазин женской одежды, где сочетаются красота,
            скромность и уютная эстетика.
          </p>

          <div style={buttonBoxStyle}>
            <a href="#catalog" style={mainButtonStyle}>
              Смотреть каталог
            </a>
            <a href="/cart" style={secondButtonStyle}>
              Перейти в корзину
            </a>
          </div>

          <div style={statsStyle}>
            <div style={statCardStyle}>
              <b>30+</b>
              <span>товаров</span>
            </div>
            <div style={statCardStyle}>
              <b>24/7</b>
              <span>онлайн заказ</span>
            </div>
            <div style={statCardStyle}>
              <b>100%</b>
              <span>эстетика</span>
            </div>
          </div>
        </div>

        <div style={heroImageBoxStyle}>
          <img
            src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=900&q=80"
            alt="NOOR collection"
            style={heroImageStyle}
          />
          <div style={imageTextStyle}>
            <b>NOOR Collection</b>
            <span>soft colors • modest fashion</span>
          </div>
        </div>
      </section>

      <section id="catalog" style={catalogStyle}>
        <div style={catalogHeaderStyle}>
          <div>
            <span style={smallTextStyle}>Каталог</span>
            <h2 style={sectionTitleStyle}>Наши товары</h2>
            <p style={catalogSubtitleStyle}>
              Выбери категорию и добавь понравившийся товар в корзину.
            </p>
          </div>

          <div style={filterBoxStyle}>
            {categories.map(item => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                style={{
                  ...filterButtonStyle,
                  background: category === item ? '#c9a96e' : '#fff',
                  color: category === item ? '#fff' : '#4a4035',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div style={gridStyle}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

const pageStyle = {
  minHeight: '100vh',
  padding: '45px 25px 80px',
}

const heroStyle = {
  maxWidth: '1150px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1.1fr 0.9fr',
  gap: '45px',
  alignItems: 'center',
}

const heroTextStyle = {
  padding: '25px 0',
}

const badgeStyle = {
  display: 'inline-block',
  padding: '10px 18px',
  borderRadius: '999px',
  background: '#fff',
  color: '#9b7b45',
  fontSize: '14px',
  fontWeight: '700',
  boxShadow: '0 10px 25px rgba(99, 73, 39, 0.08)',
}

const titleStyle = {
  fontSize: '54px',
  lineHeight: '1.05',
  margin: '25px 0 18px',
  color: '#2f2a24',
  maxWidth: '650px',
}

const subtitleStyle = {
  fontSize: '18px',
  lineHeight: '1.7',
  color: '#7a6b5d',
  maxWidth: '560px',
}

const buttonBoxStyle = {
  display: 'flex',
  gap: '14px',
  marginTop: '28px',
  flexWrap: 'wrap',
}

const mainButtonStyle = {
  padding: '15px 24px',
  borderRadius: '999px',
  background: '#c9a96e',
  color: '#fff',
  fontWeight: '700',
  boxShadow: '0 15px 30px rgba(201, 169, 110, 0.28)',
}

const secondButtonStyle = {
  padding: '15px 24px',
  borderRadius: '999px',
  background: '#fff',
  color: '#4a4035',
  fontWeight: '700',
  boxShadow: '0 15px 30px rgba(99, 73, 39, 0.08)',
}

const statsStyle = {
  display: 'flex',
  gap: '15px',
  marginTop: '30px',
  flexWrap: 'wrap',
}

const statCardStyle = {
  width: '145px',
  padding: '18px',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.7)',
  boxShadow: '0 15px 35px rgba(99, 73, 39, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}

const heroImageBoxStyle = {
  position: 'relative',
  padding: '14px',
  background: '#fff',
  borderRadius: '34px',
  boxShadow: '0 25px 60px rgba(99, 73, 39, 0.16)',
}

const heroImageStyle = {
  width: '100%',
  height: '470px',
  objectFit: 'cover',
  borderRadius: '25px',
  display: 'block',
}

const imageTextStyle = {
  position: 'absolute',
  left: '35px',
  right: '35px',
  bottom: '35px',
  padding: '18px',
  borderRadius: '22px',
  background: 'rgba(255, 255, 255, 0.82)',
  backdropFilter: 'blur(12px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}

const catalogStyle = {
  maxWidth: '1150px',
  margin: '80px auto 0',
}

const catalogHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '25px',
  alignItems: 'end',
  flexWrap: 'wrap',
}

const smallTextStyle = {
  color: '#c9a96e',
  fontWeight: '700',
}

const sectionTitleStyle = {
  fontSize: '38px',
  margin: '8px 0',
}

const catalogSubtitleStyle = {
  color: '#7a6b5d',
  margin: 0,
}

const filterBoxStyle = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
}

const filterButtonStyle = {
  border: 'none',
  padding: '12px 18px',
  borderRadius: '999px',
  boxShadow: '0 10px 25px rgba(99, 73, 39, 0.08)',
  fontWeight: '700',
}

const gridStyle = {
  marginTop: '30px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '24px',
}

export default Home