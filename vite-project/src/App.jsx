import { useState } from 'react';

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);


  // Aumento la quantità del prodotto
  const updateProductQuantity = (productName) => {
    const updated = addedProducts.map(product =>
      product.name === productName
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setAddedProducts(updated);
  };

  // Aggiungo il prodotto al carrello
  const addToCart = product => {

    const isPresent = addedProducts.find((p) => p.name === product.name);
    if (isPresent) {
      updateProductQuantity(product.name)
    } else {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);

    }

  };

  // Rimuovo un prodotto dal carrello
  const removeFromCart = (productName) => {
    const remove = addedProducts.filter(product => product.name !== productName);
    setAddedProducts(remove);
  };


  // Totale 
  const total = addedProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);



  return (
    <>
      <div>

        <h1>Lista dei prodotti</h1>

        <ul>
          {products.map((product, index) =>
          (<li key={index}>
            <span><strong>Prodotto:</strong> {product.name}</span>
            <span><strong> Prezzo:</strong> {product.price.toFixed(2)} €</span>
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
                <span> Prezzo:{product.price.toFixed(2)} €</span>
                <span>Quantità:{product.quantity} </span>
                <button onClick={() => removeFromCart(product.name)}>Rimuovi dal carrello</button>

              </li>))}
            </ul>
            <h2>Totale: {total.toFixed(2)} € </h2>
          </>
        )

        }

      </div>
    </>
  )
}

export default App
