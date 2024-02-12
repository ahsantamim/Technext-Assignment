import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
const UserForm = () => {
  const [formData, setFormData] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    address: {
      address: "",
    },
    company: {
      name: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dummyjson.com/users", formData);
      // Optionally, you can update the user list after successful submission
      // Fetch updated user list or update state
      console.log("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="avatar-container">
          <label htmlFor="avatar-input" className="avatar-label">
            Avatar:
            <input
              type="file"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="avatar-input"
            />
          </label>
        </div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="street"
            value={formData.address.address}
            onChange={handleChange}
          />
        </label>

        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.company.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
