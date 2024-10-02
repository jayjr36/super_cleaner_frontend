import React, {useState} from "react";
import "../styles/homepage.css"; 
import Modal from "../components/bookModal";

const Homepage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Close the modal
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Get form data
        const data = Object.fromEntries(formData.entries()); // Convert to object

        // Send data to backend (add your API endpoint here)
        try {
            const response = await fetch('http://localhost:8000/api/bookings', {
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
                alert('Error saving booking');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    return (
        <div>
            <h1>Super Cleaner</h1>
            <button className="cta-button" onClick={handleOpenModal}>
                Book a Cleaning
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleBookingSubmit} />
        </div>
    );
};

export default Homepage;