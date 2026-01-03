import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "https://contact-management-backend.onrender.com/api/contacts"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Contact Management App
      </h1>
  
      {/* Contact Form Section */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
        <ContactForm onSuccess={fetchContacts} />
      </div>
  
      {/* Submitted Contacts Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
  
  
}

export default App;
