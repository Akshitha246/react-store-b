import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [details, setDetails] = useState([]); // Array for storing multiple users
  const [detail, setDetail] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {
    if (detail.name && detail.email && detail.password) {
      setDetails([...details, detail]);
      setDetail({ name: "", email: "", password: "" }); // Reset form after submission
    }
  };

  const handleDelete = (index) => {
    setDetails(details.filter((_, i) => i !== index));
  };

  return (
    <div className="App-Row">
      <h2>Registration Form</h2>
      <p>
        <input
          type="text"
          placeholder="Enter name"
          value={detail.name}
          onChange={(e) => setDetail({ ...detail, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Email address"
          value={detail.email}
          onChange={(e) => setDetail({ ...detail, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="New password"
          value={detail.password}
          onChange={(e) => setDetail({ ...detail, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>

      <h4>Registered Users</h4>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {details.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <Link to="../login">Already a member? Log In</Link>
      </p>
    </div>
  );
}
