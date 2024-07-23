import { useState, useEffect } from "react";
import { auth } from "../firebase";
import LoggedInNav from "../LoggedInNav/LoggedInNav";
import Navbar from "../Navbar/Navbar"; // Ensure the path is correct

const HandleNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggles the state of the menu
  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Set up the auth state changed listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    }, (error) => {
      console.error("Failed to subscribe to auth changes", error);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []); // The dependency array is empty because we only want to set this up once

  // Conditionally render the navigation bar based on the user's login status
  return isLoggedIn ? <LoggedInNav /> : <Navbar />;
};

export default HandleNavbar;