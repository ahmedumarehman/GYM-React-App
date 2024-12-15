import React from 'react';
import './aboutus.css'; // Import your CSS file

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about">
                <img src="https://rsggroup.com/wp-content/uploads/2023/05/rsg-group-brands-brand-card-goldsgym.jpg" alt="Gym Picture 1" className="gym-picture" />
                <div className="text">
                    <h2>About Us</h2>
                    <h5>PGC Gym<span></span></h5>
                    <p>
                        "Welcome to PGC Gym, where fitness meets passion! Founded with a commitment to empower individuals on
                        their journey to wellness, our gym stands as a beacon of health and vitality in the community. At PGC Gym, we
                        believe in fostering a supportive environment where every member, regardless of fitness level, feels
                        encouraged and motivated to achieve their goals. Our state-of-the-art facilities offer a diverse range of equipment
                        and classes curated to cater to various fitness interests and aspirations. More than just a place to work out,
                        we are a community united by a shared dedication to health and wellness. Whether you're a seasoned athlete or
                        just starting your fitness journey, PGC Gym is here to guide and support you every step of the way. Join us today
                        and embark on a transformative experience towards a healthier, stronger, and happier you!"
                    </p>
                    <div className="data">
                        <a href="#" className="hire">Hire Me</a>
                    </div>
                </div>
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*-1D7YmRD8R0tprwZCsxjow.jpeg" alt="Gym Picture 2" className="gym-picture" />
            </div>
        </section>
    );
}

export default AboutUs;
