
function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <div>
        <h1>Lista dei prodotti</h1>

        <ul>
          {products.map((product, index) =>
          (<li key={index}>
            <strong>{product.name}:</strong>
            {product.price} €
          </li>))}
        </ul>
      </div>
    </>
  )
}

export default App
