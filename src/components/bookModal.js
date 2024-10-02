import React, { useState } from "react";
import "../styles/BookingModal.css"; // Add custom CSS for styling


const Modal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null; // Don't render if the modal is not open

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Book a Cleaning Service</h2>
                {/* Booking form goes here */}
                <form onSubmit={onSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" required />

                    <label>Phone:</label>
                    <input type="text" name="phone" required />

                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Select Service:</label>
                    <select name="service" required>
                        <option value="">Select a service</option>
                        <option value="Residential Cleaning">Residential Cleaning</option>
                        <option value="Office Cleaning">Office Cleaning</option>
                        <option value="Deep Cleaning">Deep Cleaning</option>
                        <option value="Window Cleaning">Window Cleaning</option>
                        <option value="Carpet Cleaning">Carpet Cleaning</option>
                    </select>

                    <label>Date:</label>
                    <input type="date" name="date" required />

                    <button type="submit">Submit Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;


// const BookingModal = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     date: "",
//   });

//   const services = [
//     "Residential Cleaning",
//     "Office Cleaning",
//     "Deep Cleaning",
//     "Window Cleaning",
//     "Carpet Cleaning",
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Booking successful!");
//         setShowModal(false); // Close the modal after successful booking
//       } else {
//         alert("Error saving booking");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred");
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Book a Service</button>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>
//               &times;
//             </span>
//             <h2>Place a Booking</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />

//               <label>Phone:</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//               />

//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />

//               <label>Select Service:</label>
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select a service</option>
//                 {services.map((service, index) => (
//                   <option key={index} value={service}>
//                     {service}
//                   </option>
//                 ))}
//               </select>

//               <label>Date:</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleInputChange}
//                 required
//               />

//               <button type="submit">Submit Booking</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingModal;
