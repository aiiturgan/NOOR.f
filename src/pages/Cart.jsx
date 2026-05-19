function Cart({ cart, removeFromCart, plusCount, minusCount }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  const sendOrder = () => {
    fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        date: '2026-05-20',
        products: cart,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert('Заказ успешно отправлен!')
      })
      .catch(error => {
        console.log(error)
        alert('Ошибка при отправке заказа')
      })
  }

  return (
    <main style={pageStyle}>
      <section style={headerStyle}>
        <span style={badgeStyle}>Корзина NOOR</span>
        <h1 style={titleStyle}>Ваш заказ</h1>
        <p style={subtitleStyle}>
          Здесь отображаются товары, которые вы добавили в корзину.
        </p>
      </section>

      {cart.length === 0 ? (
        <div style={emptyStyle}>
          <h2>Корзина пустая</h2>
          <p>Добавьте товар из каталога, чтобы оформить заказ.</p>
        </div>
      ) : (
        <section style={cartLayoutStyle}>
          <div style={itemsStyle}>
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} style={itemStyle}>
                <img src={item.image} alt={item.title} style={imageStyle} />

                <div style={infoStyle}>
                  <h3 style={itemTitleStyle}>{item.title}</h3>
                  <p style={textStyle}>Размер: {item.size}</p>
                  <p style={textStyle}>{Math.round(item.price)} сом</p>

                  <div style={countBoxStyle}>
                    <button
                      onClick={() => minusCount(item.id, item.size)}
                      style={countButtonStyle}
                    >
                      -
                    </button>

                    <span style={countStyle}>{item.count}</span>

                    <button
                      onClick={() => plusCount(item.id, item.size)}
                      style={countButtonStyle}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div style={rightStyle}>
                  <b style={priceStyle}>
                    {Math.round(item.price * item.count)} сом
                  </b>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    style={deleteButtonStyle}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside style={summaryStyle}>
            <h2 style={summaryTitleStyle}>Итог заказа</h2>

            <div style={summaryRowStyle}>
              <span>Количество товаров:</span>
              <b>{cart.length}</b>
            </div>

            <div style={summaryRowStyle}>
              <span>Общая сумма:</span>
              <b>{Math.round(total)} сом</b>
            </div>

            <button onClick={sendOrder} style={orderButtonStyle}>
              Отправить заказ
            </button>

            <p style={noteStyle}>
              При нажатии выполняется POST-запрос на API.
            </p>
          </aside>
        </section>
      )}
    </main>
  )
}

const pageStyle = {
  minHeight: '100vh',
  padding: '50px 25px 80px',
}

const headerStyle = {
  maxWidth: '1150px',
  margin: '0 auto 35px',
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
  fontSize: '46px',
  margin: '20px 0 10px',
}

const subtitleStyle = {
  color: '#7a6b5d',
  fontSize: '17px',
}

const emptyStyle = {
  maxWidth: '700px',
  margin: '0 auto',
  padding: '45px',
  borderRadius: '30px',
  background: '#fff',
  textAlign: 'center',
  boxShadow: '0 20px 50px rgba(99, 73, 39, 0.10)',
}

const cartLayoutStyle = {
  maxWidth: '1150px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 340px',
  gap: '25px',
  alignItems: 'start',
}

const itemsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
}

const itemStyle = {
  display: 'grid',
  gridTemplateColumns: '130px 1fr auto',
  gap: '18px',
  padding: '16px',
  borderRadius: '28px',
  background: '#fff',
  boxShadow: '0 18px 45px rgba(99, 73, 39, 0.09)',
  border: '1px solid rgba(201, 169, 110, 0.15)',
}

const imageStyle = {
  width: '130px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '20px',
}

const infoStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

const itemTitleStyle = {
  margin: '0 0 8px',
  fontSize: '21px',
}

const textStyle = {
  margin: '3px 0',
  color: '#7a6b5d',
}

const countBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '12px',
}

const countButtonStyle = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  border: 'none',
  background: '#fbf7ef',
  color: '#4a4035',
  fontSize: '18px',
  fontWeight: '700',
}

const countStyle = {
  minWidth: '24px',
  textAlign: 'center',
  fontWeight: '700',
}

const rightStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'space-between',
  gap: '15px',
}

const priceStyle = {
  fontSize: '20px',
  color: '#2f2a24',
}

const deleteButtonStyle = {
  border: 'none',
  padding: '10px 16px',
  borderRadius: '999px',
  background: '#f7e5dc',
  color: '#9b4b35',
  fontWeight: '700',
}

const summaryStyle = {
  padding: '24px',
  borderRadius: '30px',
  background: '#fff',
  boxShadow: '0 20px 50px rgba(99, 73, 39, 0.10)',
  border: '1px solid rgba(201, 169, 110, 0.15)',
  position: 'sticky',
  top: '100px',
}

const summaryTitleStyle = {
  margin: '0 0 20px',
}

const summaryRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '14px 0',
  borderBottom: '1px solid #f0e3d1',
  color: '#5f5247',
}

const orderButtonStyle = {
  width: '100%',
  marginTop: '22px',
  border: 'none',
  padding: '15px',
  borderRadius: '999px',
  background: '#c9a96e',
  color: '#fff',
  fontWeight: '700',
  fontSize: '16px',
  boxShadow: '0 15px 30px rgba(201, 169, 110, 0.28)',
}

const noteStyle = {
  marginTop: '14px',
  color: '#9b8b7b',
  fontSize: '14px',
  lineHeight: '1.5',
  textAlign: 'center',
}

export default Cart