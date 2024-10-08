import React, { useState, useEffect } from "react";
import "../styles/managebookings.css"; 

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // Fetch all bookings on component mount
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/getbookings");
        const data = await response.json();

        if (response.ok) {
          setBookings(data);
        } else {
          setError("Failed to fetch bookings");
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("An error occurred while fetching bookings."+ error);
      }
    };

    fetchBookings();
  }, []);

  // Function to handle booking status update
  const handleBookingAction = async (id, action) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/bookings/${id}/${action}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        // Update booking status in the frontend
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === id ? { ...booking, status: action } : booking
          )
        );
      } else {
        console.error("Failed to update booking status");
        setError("Failed to update booking status.");
      }
    } catch (err) {
      console.error("Error updating booking status:", err);
    }
  };

  return (
    <div className="manage-bookings-container">
      <h2 className="manage-bookings-header">Manage Bookings</h2>

      {error && <p className="error-message">{error}</p>}

      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Name</th>
            <th>Service</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.service}</td>
                <td>{booking.phone}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === "pending" && (
                    <div className="action-buttons">
                      <button
                        className="accept-button"
                        onClick={() => handleBookingAction(booking.id, "accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="decline-button"
                        onClick={() => handleBookingAction(booking.id, "declined")}
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No bookings found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
