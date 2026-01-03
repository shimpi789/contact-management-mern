import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "https://contact-management-mern-f75y.onrender.com/api/contacts"
      );
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-10">
    <h1 className="text-4xl font-bold text-center text-white mb-10">
      Contact Management App
    </h1>

    {/* Contact Form Section */}
    <div className="max-w-md mx-auto bg-gray-900 text-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-700">
      <ContactForm onSuccess={fetchContacts} />
    </div>

    {/* Submitted Contacts Section */}
    <div className="max-w-3xl mx-auto bg-gray-900 text-white rounded-2xl shadow-lg p-8 border border-gray-700">
      <ContactList contacts={contacts} />
    </div>
  </div>
);

  
  
}

export default App;
