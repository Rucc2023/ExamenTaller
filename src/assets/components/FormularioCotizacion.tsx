import React from 'react';
import './FormularioCotizacion.css';

function FormularioCotizacion() {
  return (
    <div className="form-container">
      <h2 className="form-title">Walmart</h2>
      <p className="form-subtitle">Selecciona tu producto y el tipo de entrega</p>
      <img src="/public/Walmart.png" alt="Logo de Walmart" className="form-image" />

      <div className="section">
        <h3 className="section-title">Información del cliente</h3>
        <div className="input-group">
          <input type="text" placeholder="Nombre" className="input-field" />
          <input type="email" placeholder="Correo" className="input-field" />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Seleccion tu producto</h3>
        <div className="input-group">
          <input type="number" placeholder="Cantidad de productos" className="input-field" />
          <select className="input-field">
            <option>Productos</option>
            <option>PS5</option>
            <option>XBOX Series X</option>
            <option>WII</option>
          </select>
          <select className="input-field">
            <option>Tipo de Entrega</option>
            <option>Entrega Normalita</option>
            <option>Entrega Furiosa</option>
          </select>
        </div>
      </div>

      <div className="terms-container">
        <input type="checkbox" id="terms" className="checkbox" />
        <label htmlFor="terms">Acepto los términos y condiciones</label>
      </div>
      <br />

      <button className="submit-button">Enviar</button>
    </div>
  );
}

export default FormularioCotizacion;
