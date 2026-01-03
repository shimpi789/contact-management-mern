import React, { useState } from "react";
import axios from "axios";

function ContactForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // ✅ disable submit when invalid
  const isFormValid =
    formData.name.trim() &&
    formData.phone.trim() &&
    (!formData.email || formData.email.includes("@"));

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (formData.email && !formData.email.includes("@")) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post(
        "https://contact-management-mern-f75y.onrender.com/api/contacts",
        formData
      );

      // ✅ show success
      setSuccess("Contact submitted successfully");

      // ✅ auto-hide after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);

      if (typeof onSuccess === "function") {
        onSuccess();
      }

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      setErrors({});
    } catch (error) {
      console.error("Error submitting contact", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-semibold text-center text-white">
        Add Contact
      </h2>

      <p className="text-center text-gray-400 text-sm">
        Fill in the details below to add a new contact
      </p>

      {success && (
        <div className="bg-green-900 border border-green-500 text-green-300 px-4 py-2 rounded-lg text-center font-medium">
          {success}
        </div>
      )}

      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 rounded-lg font-semibold transition ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        }`}
      >
        Submit Contact
      </button>
    </form>
  );
}

export default ContactForm;

    
