import { useState } from 'react';

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);


  const addToCart = product => {

    const isPresent = addedProducts.find((p) => p.name === product.name);
    if (!isPresent) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }

  };




  return (
    <>
      <div>

        <h1>Lista dei prodotti</h1>

        <ul>
          {products.map((product, index) =>
          (<li key={index}>
            <span><strong>Prodotto:</strong> {product.name}</span>
            <span><strong> Prezzo:</strong> {product.price} €</span>
            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
          </li>))}
        </ul>

        {addedProducts.length > 0 && (
          <>
            <h1>Prodotti carrello</h1>
            <ul>
              {addedProducts.map((product, index) =>
              (<li key={index}>

                <strong>{product.name}</strong>
                <span> Prezzo:{product.price} €</span>
                <span>Quantità:{product.quantity} </span>


              </li>))}
            </ul>
          </>
        )

        }

      </div>
    </>
  )
}

export default App
