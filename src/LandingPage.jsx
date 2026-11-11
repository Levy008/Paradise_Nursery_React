function LandingPage({ onGetStarted }) {
  return (
    <main className="landing-page">
      <section className="welcome-panel" aria-labelledby="welcome-title">
        <div className="welcome-overlay" />
        <div className="welcome-content">
          <div className="welcome-intro">
            <h2 id="welcome-title">
              Welcome To
              <br />
              Paradise Nursery
            </h2>
            <span className="intro-rule" aria-hidden="true" />
            <p>Where Green Meets Serenity</p>
            <button
              className="get-started-button"
              type="button"
              onClick={onGetStarted}
            >
              Get Started
            </button>
          </div>

          <div className="welcome-copy">
            <p className="welcome-lead">
              Welcome to Paradise Nursery, where green meets serenity!
            </p>
            <p>
              At Paradise Nursery, we are passionate about bringing nature
              closer to you. Our mission is to provide a wide range of
              high-quality plants that not only enhance the beauty of your
              surroundings but also contribute to a healthier and more
              sustainable lifestyle. From air-purifying plants to aromatic
              fragrant ones, we have something for every plant enthusiast.
            </p>
            <p>
              Our team of experts is dedicated to ensuring that each plant
              meets our strict standards of quality and care. Whether you&apos;re
              a seasoned gardener or just starting your green journey, we&apos;re
              here to support you every step of the way. Feel free to explore
              our collection, ask questions, and let us help you find the
              perfect plant for your home or office.
            </p>
            <p>
              Join us in our mission to create a greener, healthier world.
              Visit Paradise Nursery today and experience the beauty of nature
              right at your doorstep.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
