import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <header
      style={{
        width: '100%',
        padding: '18px 40px',
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'rgba(251, 247, 239, 0.85)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(201, 169, 110, 0.2)',
      }}
    >
      <nav
        style={{
          width: '100%',
          maxWidth: '1150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '24px',
            letterSpacing: '1px',
            color: '#2f2a24',
          }}
        >
          <span
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#fff',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 10px 25px rgba(99, 73, 39, 0.12)',
            }}
          >
            🌙
          </span>
          NOOR
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#fff',
            padding: '8px',
            borderRadius: '999px',
            boxShadow: '0 12px 30px rgba(99, 73, 39, 0.08)',
          }}
        >
          <Link to="/" style={linkStyle}>Главная</Link>
          <Link to="/about" style={linkStyle}>О нас</Link>
          <Link to="/cart" style={cartStyle}>Корзина ({cartCount})</Link>
        </div>
      </nav>
    </header>
  )
}

const linkStyle = {
  padding: '10px 16px',
  borderRadius: '999px',
  color: '#4a4035',
}

const cartStyle = {
  padding: '10px 18px',
  borderRadius: '999px',
  background: '#c9a96e',
  color: '#fff',
}

export default Navbar