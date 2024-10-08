import React from "react";
import "../styles/MainContent.css";
import HomePage from "../pages/homepage";
import ServicesPage from "../pages/services";
import AboutPage from "../pages/about";
import SearchBooking from "./searchBooking";
import ManageBookings from "../pages/bookings";
import RegistrationPage from "../pages/registration";
import ApplicationDashboard from "../pages/applications";

const MainContent = ({ page }) => {
  const renderContent = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "searchbooking":
        return <SearchBooking/>;
      case "bookings":
        return <ManageBookings/>;
      case "register":
        return <RegistrationPage/>;
      case "approval":
        return <ApplicationDashboard/>;
      case "contact":
        return <p>Contact us here.</p>;
      default:
        return <p>Select a page from the sidebar.</p>;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}

      {/* <div>
        <footer className="footer-section">
          <p>Contact us: 255 715 016 188 | info@supercleaner.com</p>
          <p>&copy; 2024 Super Cleaner. All Rights Reserved.</p>
        </footer>
      </div> */}
    </div>
  );
};

export default MainContent;
