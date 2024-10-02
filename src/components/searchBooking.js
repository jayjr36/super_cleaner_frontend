import React, { useState } from "react";

const SearchBooking = () => {
  const [phone, setPhone] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/bookings/search?phone=${phone}`
      );
      const data = await response.json();

      if (response.ok) {
        setBooking(data);
        setError("");
      } else {
        setBooking(null);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Search Your Booking</h2>
      <form onSubmit={handleSearch}>
        <label>Enter Phone Number:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {booking && (
        <div>
          <h3>Booking Details</h3>
          <p>Name: {booking.name}</p>
          <p>Service: {booking.service}</p>
          <p>Date: {booking.date}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchBooking;
