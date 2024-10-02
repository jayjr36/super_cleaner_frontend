import React from "react";
import "../styles/ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-page">
      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <ul className="services-list">
          <li className="service-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121328013-f9efabdabde5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Residential Cleaning"
            />
            <h3>Residential Cleaning</h3>
            <p>
              We provide comprehensive residential cleaning services to keep
              your home spotless and welcoming. From dusting and mopping to
              thorough kitchen and bathroom cleaning, we take care of every
              corner of your home.
            </p>
          </li>
          <li className="service-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047397245-2ddad26c5dd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Office Cleaning"
            />
            <h3>Office Cleaning</h3>
            <p>
              Our professional office cleaning services ensure a clean and
              productive environment for your business. We clean workspaces,
              common areas, restrooms, and more.
            </p>
          </li>
          <li className="service-item">
            <img
              src="https://images.unsplash.com/photo-1580842402762-6f5868c17412?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Deep Cleaning"
            />
            <h3>Deep Cleaning</h3>
            <p>
              A more intense cleaning service for spaces that need a detailed
              touch. This service covers hard-to-reach areas, deep carpet
              cleaning, and sanitization of high-traffic areas.
            </p>
          </li>
          <li className="service-item">
            <img
              src="https://images.unsplash.com/photo-1676091108009-d3ea5771d7bc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Window Cleaning"
            />
            <h3>Window Cleaning</h3>
            <p>
              Enjoy crystal-clear views with our window cleaning services. We
              ensure streak-free, sparkling windows for both homes and offices.
            </p>
          </li>
          <li className="service-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1661679071407-9eb342c3a32c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnBldCUyMGNsZWFuaW5nfGVufDB8fDB8fHww"
              alt="Carpet Cleaning"
            />
            <h3>Carpet Cleaning</h3>
            <p>
              Our carpet cleaning services remove dirt, stains, and allergens to
              restore the freshness and beauty of your carpets, using
              eco-friendly products and advanced cleaning techniques.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ServicesPage;
