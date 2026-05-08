import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/submit', data);
      console.log(response.data.message); // Success message from server
    } catch (error) {
      console.error("Error submitting form:", error.response?.data.message || error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 4, message: "Minimum length is 4" },
              maxLength: { value: 8, message: "Maximum length is 8" }
            })}
            type="text"
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum length is 6" }
            })}
            type="password"
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

