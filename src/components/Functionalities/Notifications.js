import React, { useState, useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Add event listener to listen for 'addToCart' events
    document.addEventListener("addToCart", handleAddToCartNotification);

    // Clean up by removing event listener when component unmounts
    return () => {
      document.removeEventListener("addToCart", handleAddToCartNotification);
    };
  }, []);

  const handleAddToCartNotification = (event) => {
    const { item } = event.detail;
    // Update notifications state to include the new item added to the cart
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      `Added ${item.title} to cart`,
    ]);
    // Automatically remove the notification after some time (e.g., 5 seconds)
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification !== `Added ${item.title} to cart`)
      );
    }, 5000);
  };

  return (
    <div className="notifications">
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
