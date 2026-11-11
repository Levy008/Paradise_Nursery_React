import './ProductListingPage.css'

function ProductList({
  plants,
  cartItems,
  cartCount,
  onAddToCart,
  onShowHome,
  onShowCart,
}) {
  const categories = [...new Set(plants.map((plant) => plant.category))]

  return (
    <main className="store-page product-page">
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
        <button
          className="cart-button"
          type="button"
          aria-label={`Open cart with ${cartCount} items`}
          onClick={onShowCart}
        >
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>
          <span>{cartCount}</span>
        </button>
      </header>

      <div className="product-catalog">
        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h1>{category}</h1>
            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isInCart = cartItems.some(
                    (item) => item.id === plant.id,
                  )

                  return (
                    <article className="plant-card" key={plant.id}>
                      <span className="sale-badge">SALE</span>
                      <h2>{plant.name}</h2>
                      <img src={plant.image} alt={plant.name} />
                      <p className="plant-price">${plant.price}</p>
                      <p className="plant-description">{plant.description}</p>
                      <button
                        className={isInCart ? 'added-to-cart-button' : ''}
                        type="button"
                        disabled={isInCart}
                        onClick={() => onAddToCart(plant)}
                      >
                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </article>
                  )
                })}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default ProductList
