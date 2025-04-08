import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './CartView.module.css';

const CartView = () => {
  const { cart, removeItem, clear } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '', address: '' });
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del comprador:", buyer);
    clear(); // Vacía el carrito
    setShowForm(false);
    setPurchaseCompleted(true);
  };

  if (purchaseCompleted) {
    return (
      <div className={styles.emptyCart}>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Pronto recibirás un correo con los detalles de tu pedido.</p>
        <Link to="/">
          <button className={styles.btn}>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  if (cart.length === 0 && !showForm) {
    return (
      <div className={styles.emptyCart}>
        <h2>Tu carrito está vacío 😢</h2>
        <Link to="/">
          <button className={styles.btn}>Ir a la tienda</button>
        </Link>
      </div>
    );
  }



  return (
    <div className={styles.cartView}>
      <h2>Resumen de tu compra 🛒</h2>

      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imageId} alt={item.title} />
            <div className={styles.details}>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartSummary}>
        <h3>Total: ${total}</h3>
        <button onClick={clear} className={styles.clearBtn}>Vaciar carrito</button>
        <button className={styles.buyBtn} onClick={() => setShowForm(true)}>Finalizar compra</button>
      </div>

      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Completa tus datos</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={buyer.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={buyer.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={buyer.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Dirección"
                value={buyer.address}
                onChange={handleInputChange}
                required
              />

              <div className={styles.formButtons}>
                <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                <button type="submit">Confirmar compra</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;

