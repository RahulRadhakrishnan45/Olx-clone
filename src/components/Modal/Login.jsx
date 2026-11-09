import React, { useState } from 'react'
import './Login.css'

import mobile from '../../assets/mobile.svg'
import guitar from '../../assets/guitar.png'
import love from '../../assets/love.png'
import avatar_icon from '../../assets/avatar_icon.png'
import close from '../../assets/close.svg'
import google from '../../assets/google.png'

const slides = [
    {
        image: guitar,
        title: 'Help us become one of the safest places to buy and sell'
    },
    {
        image: love,
        title: 'Find something you love on OLX'
    },
    {
        image: avatar_icon,
        title: 'Connect with people around you'
    }
]

const Login = ({ toggleModal, status }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    // Next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    // Previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) =>
            (prev - 1 + slides.length) % slides.length
        )
    }

    if (!status) return null

    return (
        <div className="login-overlay" onClick={toggleModal}>

            <div
                className="login-modal"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close Button */}
                <button
                    className="close-btn"
                    onClick={toggleModal}
                >
                    <img src={close} alt="Close" />
                </button>


                {/* Carousel */}
                <div className="carousel-container">

                    {/* Previous Button */}
                    <button
                        className="carousel-arrow prev"
                        onClick={prevSlide}
                        type="button"
                        aria-label="Previous slide"
                    >
                        ‹
                    </button>


                    {/* Carousel Viewport */}
                    <div className="carousel-viewport">

                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`
                            }}
                        >

                            {slides.map((slide, index) => (

                                <div className="carousel-slide" key={index}>

                                    <img
                                        src={slide.image}
                                        alt="OLX illustration"
                                    />

                                    <h4>{slide.title}</h4>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Next Button */}
                    <button
                        className="carousel-arrow next"
                        onClick={nextSlide}
                        type="button"
                        aria-label="Next slide"
                    >
                        ›
                    </button>


                    {/* Indicators */}
                    <div className="carousel-indicators">

                        {slides.map((slide, index) => (

                            <button
                                key={index}
                                type="button"
                                className={
                                    currentSlide === index ? 'active' : ''
                                }
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />

                        ))}

                    </div>

                </div>


                {/* Login Options */}
                <div className="login-options">

                    <button className="phone-login">

                        <img src={mobile} alt="Mobile" />

                        <span>Continue with phone</span>

                    </button>


                    <button className="google-login">

                        <img src={google} alt="Google" />

                        <span>Continue with Google</span>

                    </button>


                    <div className="separator">

                        <span></span>

                        <p>OR</p>

                        <span></span>

                    </div>


                    <button className="email-login">
                        Login with Email
                    </button>

                </div>


                {/* Footer */}
                <div className="login-footer">

                    <p>
                        All your personal details are safe with us.
                    </p>

                    <p>
                        If you continue, you are accepting
                        <strong> OLX Terms and Conditions </strong>
                        and <strong>Privacy Policy</strong>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Login