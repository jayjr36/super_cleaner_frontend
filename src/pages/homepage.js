import React, {useState} from "react";
import "../styles/homepage.css"; 
import Modal from "../components/bookModal";

const Homepage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true); 
    };

    const handleCloseModal = () => {
        setModalOpen(false); 
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Get form data
        const data = Object.fromEntries(formData.entries()); // Convert to object
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                alert('Booking successful!');
                handleCloseModal(); // Close modal on success
            } else {
                // Handle the case where the response is not OK
                const errorData = await response.json();
                alert('Error saving booking: ' + (errorData.message || 'Validation error'));
                console.error('Error details:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving the booking.'+ error);
        }
    };
    
    

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Super Cleaner</h1>
                <p className="hero-subtitle">Your trusted partner for sparkling clean spaces</p>
                <p className="hero-description">
                    At Super Cleaner, we offer top-notch residential and commercial cleaning services 
                    tailored to meet your needs. Whether it's a quick tidy-up or a deep clean, our 
                    professionals are here to make your space shine.
                </p>
                <button className="cta-button" onClick={handleOpenModal}>
                    Book a Cleaning
                </button>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <h2>Why Choose Super Cleaner?</h2>
                <ul>
                    <li>Experienced and Professional Cleaners</li>
                    <li>Affordable Rates with Transparent Pricing</li>
                    <li>Eco-Friendly Cleaning Solutions</li>
                    <li>Flexible Scheduling to Fit Your Needs</li>
                    <li>Satisfaction Guaranteed</li>
                </ul>
            </section>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleBookingSubmit} />
        </div>
    );
};

export default Homepage;