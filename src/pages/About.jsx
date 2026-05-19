function About() {
  return (
    <main style={pageStyle}>
      <section style={cardStyle}>
        <span style={badgeStyle}>О магазине</span>

        <h1 style={titleStyle}>NOOR</h1>

        <p style={textStyle}>
          NOOR — это интернет-магазин женской мусульманской одежды, созданный
          для тех, кто ценит скромность, красоту и элегантность.
        </p>

        <p style={textStyle}>
          «…И пусть они прикрывают своими покрывалами вырез на груди…»
— Сура «Ан-Нур», 24:31 ✨
        </p>

        <div style={featuresStyle}>
          <div style={featureStyle}>
            <b>🤍 Скромность</b>
            <span>— Настоящая красота не нуждается в лишнем внимании.</span>
          </div>

          <div style={featureStyle}>
            <b>🌙 Хиджаб</b>
            <span>— Хиджаб — это не ограничение, а достоинство.</span>
          </div>

          <div style={featureStyle}>
            <b>✨ Нур</b>
            <span>— Женщина с чистым сердцем светит сильнее любых украшений</span>
          </div>
        </div>
      </section>
    </main>
  )
}

const pageStyle = {
  minHeight: '100vh',
  padding: '70px 25px',
}

const cardStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '50px',
  borderRadius: '36px',
  background: '#fff',
  boxShadow: '0 25px 60px rgba(99, 73, 39, 0.12)',
  border: '1px solid rgba(201, 169, 110, 0.15)',
}

const badgeStyle = {
  display: 'inline-block',
  padding: '10px 18px',
  borderRadius: '999px',
  background: '#fbf7ef',
  color: '#9b7b45',
  fontSize: '14px',
  fontWeight: '700',
}

const titleStyle = {
  fontSize: '52px',
  margin: '22px 0 15px',
  letterSpacing: '2px',
}

const textStyle = {
  fontSize: '18px',
  lineHeight: '1.8',
  color: '#6f6256',
}

const featuresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '18px',
  marginTop: '35px',
}

const featureStyle = {
  padding: '22px',
  borderRadius: '24px',
  background: '#fbf7ef',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  color: '#4a4035',
}

export default About