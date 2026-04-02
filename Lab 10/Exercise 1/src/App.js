import React, { useState } from "react";

function App() {
  // 2: State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // 4: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 3: Controlled components (binding value with state)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 5: Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // 8: Handle form submit
  const handleSubmit = (e) => {
    // 7: Prevent default
    e.preventDefault();

    const validationErrors = validate();

    // 6: Show errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");

      // 9: Reset form
      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div>
      <h2>User Form</h2>

      {/* 1: Form interface */}
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {/* 6: Error display */}
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;