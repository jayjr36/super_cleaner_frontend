import React, { useState } from 'react';
import '../styles/registration.css';


const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleFileChange = (e) => {
    setDocuments(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address)
    Array.from(documents).forEach((doc) => formData.append('documents[]', doc));

    try {
      const response = await fetch('http://127.0.0.1:8000/api/cleaner/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      alert("response"+data.message);
    } catch (error) {
        alert("Error: "+ error.message);
      console.error('Error submitting registration:', error);
    }
  };

  return (
    <div className="cleaner-registration-container">
    <form onSubmit={handleSubmit}>
      <h2>Cleaner Registration</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Addresss" required />
      <input type="file" onChange={handleFileChange} multiple required />
      <button type="submit">Submit Application</button>
    </form>
    </div>
  );
};

export default RegistrationPage;
