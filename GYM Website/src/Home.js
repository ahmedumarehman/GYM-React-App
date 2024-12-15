import React from 'react';
import './home.css'; // Import your CSS file
import Navbar from './Navbar';
function App() {
    return (
        <div>
            {/* Menu */}


            <Navbar />
            <div className="menu">
                <div className="container flex">
                    {/* Mobile Button */}
                    <div className="mobile-btn">
                        <ion-icon name="grid"></ion-icon>
                    </div>
                    <div className="logo">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/logo.png" alt="" />
                    </div>

                    <ul className="nav">
                        <li className="nav-item"><a href="home.html">Home</a></li>
                        <li className="nav-item"><a href="#why-us">Features</a></li>
                        <li className="nav-item"><a href="#explore">Explore</a></li>
                        <li className="nav-item"><a href="#discount">Register</a></li>
                    </ul>

                    <a href="#" className="btn">Register</a>
                </div>
            </div>
            {/* End Menu */}

            {/* Header */}
            <header className="header">
                <div className="container flex">
                    <div className="text">
                        <h1 className="mb">
                            Complete Daily <br />
                            <span>Workout</span> At Home
                        </h1>

                        <p className="mb">
                            Welcome to our virtual gym where you can complete your daily workout from the comfort of your home!
                            We
                            understand the importance of staying active and healthy, especially
                            during challenging times. With our comprehensive online platform, you have access to a variety of
                            workouts designed to target every muscle group and accommodate all fitness levels. Whether you're a
                            beginner or a seasoned pro, our expert trainers are here to guide you through invigorating routines
                            that will help you reach your fitness goals. Say goodbye to excuses and hello to a fitter, stronger
                            you all within the convenience of your own home
                        </p>

                        <a href="#" className="btn mt">Get Started Now</a>
                    </div>

                    <div className="visual">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png" alt="" />
                    </div>
                </div>
            </header>
            {/* End Header */}

            {/* Why Us */}
            <div className="section" id="why-us">
                <div className="container flex">
                    <div className="text">
                        <h2 className="primary mb">Why Choose Us?</h2>
                        <h3 className="secondary mb">Consulatation with Expert.</h3>
                        <p className="tertiary">
                            Unlock Your Fitness Potential: Consultation with
                            Our Expert Trainers for Personalized Guidance
                        </p>
                    </div>
                    <div className="visual">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/why-us.png" alt="" />
                    </div>
                </div>
            </div>
            {/* End Why Us */}

            {/* Explore */}
            <div className="section" id="explore">
                <div className="container flex">
                    <div className="visual">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h2 className="primary mb">
                            Explore Our Fitness <br />
                            Studio
                        </h2>
                        <p className="tertiary mb">
                            Embark on Your Fitness Journey: Explore Our
                            Dynamic Fitness Studio Today
                        </p>

                        <a href="#" className="btn mt">Get Started Now</a>
                    </div>
                </div>
            </div>
            {/* End Explore */}

            {/* Trainer */}
            <div className="section" id="trainer">
                <h2 className="primary mb">Our Professional Trainers</h2>
                <div className="container flex">
                    <div className="trainer">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg" alt="" />
                        <h3 className="secondary mb">Alan Smith</h3>
                        <p className="tertiary mb">
                            Unlock Your Potential with Alan Smith: Your Path to Fitness Excellence Begins Here
                        </p>
                        <a href="#" className="btn-2">
                            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                        </a>
                    </div>

                    <div className="trainer">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg" alt="" />
                        <h3 className="secondary mb">John Jr</h3>
                        <p className="tertiary mb">
                            Unlock Your Potential with John Jr: Your Path to Fitness Excellence Begins Here
                        </p>
                        <a href="#" className="btn-2">
                            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                        </a>
                    </div>

                    <div className="trainer">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg" alt="" />
                        <h3 className="secondary mb">Kamla Khan</h3>
                        <p className="tertiary mb">
                            Unlock Your Potential with Kamla Khan+: Your Path to Fitness Excellence Begins Here
                        </p>
                        <a href="#" className="btn-2">
                            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
            {/* End Trainer */}

            {/* Testimonial */}
            <div className="section" id="testimonial">
                <div className="container flex">
                    <div className="text">
                        <h2 className="primary">
                            That's What Our Super <br />
                            Client Says
                        </h2>

                        <div className="client">
                            <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg" alt="" />
                            <h2 className="secondary">Excellent Training</h2>
                            <p className="tertiary">
                                Joining this gym has been one of the best decisions I
                                've made for my fitness journey. The training here is truly excellent in every aspect. From the
                                knowledgeable trainers who tailor workouts to individual goals to the state-of-the-art
                                equipment, everything is top-notch
                            </p>
                        </div>
                    </div>
                    <div className="visual">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png" alt="" />
                    </div>
                </div>
            </div>
            {/* End Testimonial */}

            {/* Discount */}
            <div className="section" id="discount">
                <div className="container flex">
                    <div className="visual">
                        <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png" alt="" />
                    </div>
                    <div className="text">
                        <h2 className="primary mb">
                            Fitness Classes This Summer, Pay Now And Get 25% Discount
                        </h2>

                        <p className="tertiary mb">
                            Step into Summer with our exhilarating fitness classes designed to elevate your workout routine and
                            achieve your fitness goals. From high-energy cardio sessions to muscle-toning strength training,
                            we've got a class for everyone.

                            Don't miss out on this exclusive offer – secure your spot now and enjoy a 25% discount on all summer
                            fitness classes. Commit to your health and wellness journey today while saving big!

                            Join us as we embark on a summer of strength, endurance, and transformation. Take advantage of this
                            limited-time offer and invest in yourself with our dynamic fitness classes.

                            Hurry, the summer countdown has begun! Reserve your spot today and let's make this summer your
                            fittest one yet
                        </p>

                        <a href="#" className="btn bt">Book Now</a>
                    </div>
                </div>
            </div>
            {/* End Discount */}

            {/* Footer */}
            <footer className="footer">
                <div className="container flex">
                    <p className="tertiary">
                        &copy; PGC Gym. All Rights Reserved.
                    </p>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    );
}

export default App;
