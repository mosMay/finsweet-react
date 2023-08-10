import './Focus.css'
import focus from '../Images/focus.jpg'


const Focus = () => {
  return (
    <section id="focus">
        <div className="container">
            <div className="focus-details">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>Who we are</h5>
                        <h2>Goal focussed</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className="col-lg-6 continuous-improv">
                        <h2>Continuous improvement</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div className="focus-img">
                <img src={focus} alt="focus image"/>
            </div>
        </div>
    </section>
  )
}

export default Focus