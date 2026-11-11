import './ShoppingCartPage.css'

function CartItem({
  cartItems,
  cartCount,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
  onShowHome,
  onShowProducts,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <main className="store-page cart-page">
      <header className="store-header">
        <button className="brand-button" type="button" onClick={onShowHome}>
          <span className="brand-icon" aria-hidden="true">
            🌿
          </span>
          <span>
            <strong>Paradise Nursery</strong>
            <small>Where Green Meets Serenity</small>
          </span>
        </button>
        <span className="store-title">Plants</span>
        <span className="cart-button cart-button-static" aria-label={`${cartCount} items in cart`}>
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>
          <span>{cartCount}</span>
        </span>
      </header>

      <section className="cart-content" aria-labelledby="cart-title">
        <h1 id="cart-title">Total Cart Amount: ${total}</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button type="button" onClick={onShowProducts}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => onDecreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => onIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <strong>Total: ${item.price * item.quantity}</strong>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <button type="button" onClick={onShowProducts}>
              Continue Shopping
            </button>
            <button className="checkout-button" type="button">
              Checkout
            </button>
          </>
        )}
      </section>
    </main>
  )
}

export default CartItem
