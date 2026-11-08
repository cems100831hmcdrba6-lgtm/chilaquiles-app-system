import { useState } from 'react';
import './App.css';

function App() {
  const [salsa, setSalsa] = useState('Verde');
  const [proteina, setProteina] = useState('Huevo');
  const [incluyeCafe, setIncluyeCafe] = useState(false);

  // Cálculo dinámico del precio
  const precioBase = 80;
  let precioTotal = precioBase;

  if (proteina === 'Arrachera') precioTotal += 40;
  if (proteina === 'Pollo' || proteina === 'Cecina') precioTotal += 30;
  if (incluyeCafe) precioTotal += 25;

  const confirmarPedido = () => {
    alert(`✅ Pedido enviado:\n\nChilaquiles en salsa ${salsa}\nProteína: ${proteina}\nCafé: ${incluyeCafe ? 'Sí' : 'No'}\nTotal: $${precioTotal} MXN`);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🍽️ Chilaquiles & Cía.</h1>
        <p>Arma tus chilaquiles al gusto y recíbelos calientitos</p>
      </header>

      <main>
        <section className="seccion-formulario">
          <h2>Arma tu Orden</h2>

          <div className="campo">
            <label>Elige tu Salsa:</label>
            <select 
              value={salsa} 
              onChange={(e) => setSalsa(e.target.value)}
            >
              <option value="Verde">Salsa Verde</option>
              <option value="Roja">Salsa Roja</option>
              <option value="Habanero">Salsa de Habanero 🌶️</option>
              <option value="Mole">Mole Poblano</option>
            </select>
          </div>

          <div className="campo">
            <label>Elige tu Proteína:</label>
            <select 
              value={proteina} 
              onChange={(e) => setProteina(e.target.value)}
            >
              <option value="Huevo">Huevo Deshebrado ($80)</option>
              <option value="Pollo">Pollo (+$30)</option>
              <option value="Cecina">Cecina (+$30)</option>
              <option value="Arrachera">Arrachera (+$40)</option>
            </select>
          </div>

          <div className="campo checkbox">
            <label>
              <input
                type="checkbox"
                checked={incluyeCafe}
                onChange={(e) => setIncluyeCafe(e.target.checked)}
              />
              Agregar Café de Olla del día (+$25) ☕
            </label>
          </div>
        </section>

        <section className="seccion-resumen">
          <h3>Resumen de tu Desayuno</h3>
          <p><strong>Estilo:</strong> Chilaquiles en salsa <strong>{salsa}</strong></p>
          <p><strong>Proteína:</strong> {proteina}</p>
          <p><strong>Café de Olla:</strong> {incluyeCafe ? 'Sí' : 'No'}</p>
          <h2 className="total">Total a Pagar: ${precioTotal} MXN</h2>
          
          <button onClick={confirmarPedido} className="btn-confirmar">
            Confirmar Pedido ✅
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
