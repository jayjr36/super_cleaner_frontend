import React, { useState } from "react";
import "../styles/searchbooking.css";

const SearchBooking = () => {
  const [phone, setPhone] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/bookings/search?phone=${phone}`
      );

      if (!response.ok) {
        const data = await response.json();
        setBooking(null);
        setError(data.message || "Error fetching booking");
        return;
      }

      const data = await response.json();

      if (data && Object.keys(data).length > 0) {
        setBooking(data);
        setError("");
      } else {
        setBooking(null);
        setError("No booking found for the provided phone number.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while searching for booking.");
    }
  };

  return (
    <div className="search-booking-container">
      <h2 className="search-booking-header">Search Your Booking</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <label htmlFor="phone">Enter Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {booking && (
        <div className="booking-results">
          <h3>Booking Details</h3>
          <div className="booking-item">
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Service:</strong> {booking.service}</p>
            <p><strong>Date:</strong> {booking.date}</p>
          </div>
        </div>
      )}

      {error && <p className="no-results">{error}</p>}
    </div>
  );
};

export default SearchBooking;