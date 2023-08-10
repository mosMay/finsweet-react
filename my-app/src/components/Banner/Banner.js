import './Banner.css'
import banner from '../Images/banner-img.jpg'

const Banner = () => (
  <section id="banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-details">
            <h5>About us</h5>
            <h1>Our designs solve problems</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>

        </div>


        <div className="col-lg-6">
          <div className="banner-img">
            <img src={banner} alt="banner image" />
          </div>
        </div>
      </div>

    </div>

  </section>
)

export default Banner