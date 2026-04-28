function Cart({ cart, removeFromCart, plusCount, minusCount }) {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.count
  }, 0)

  const sendOrder = () => {
    fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        date: new Date().toISOString().slice(0, 10),
        products: cart.map(item => ({
          productId: item.id,
          quantity: item.count
        }))
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        alert('Заказ отправлен')
      })
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Корзина 🛍️</h1>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={`${item.id}-${item.size}`}
              style={{
                background: '#fff',
                padding: '15px',
                borderRadius: '15px',
                marginBottom: '15px',
                border: '1px solid #eee'
              }}
            >
              <h3>{item.name}</h3>
              <p>Размер: {item.size}</p>
              <p>{item.price} сом</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => minusCount(item.id, item.size)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => plusCount(item.id, item.size)}>+</button>
              </div>

              <p>
                Сумма: {item.price * item.count} сом
              </p>

              <button
                onClick={() => removeFromCart(item.id, item.size)}
                style={{
                  background: '#333',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px'
                }}
              >
                Удалить
              </button>
            </div>
          ))}

          <h2>Итого: {total} сом</h2>

          <button
            onClick={sendOrder}
            style={{
              background: '#c9a96e',
              color: '#fff',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '10px'
            }}
          >
            Оформить заказ
          </button>
        </>
      )}
    </div>
  )
}

export default Cart