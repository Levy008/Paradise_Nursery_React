import AboutUs from './AboutUs'

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
            <AboutUs />
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
