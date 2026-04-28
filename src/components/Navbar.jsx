import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '20px'
    }}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/cart">Корзина ({cartCount})</Link>
    </div>
  )
}

export default Navbar