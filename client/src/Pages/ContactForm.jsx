import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Contact Form</h2>
      <div className="contact-form">
        <label>Name: </label>
        <input
          name="name"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
        <label>Phone Number: </label>
        <input
          name="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            console.log(phoneNumber);
          }}
        />
        <label>Age: </label>
        <input
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
            console.log(age);
          }}
        />
        <label>Email: </label>
        <input
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <button
          onClick={() => {
            navigate(`/contact/submitted`);
          }}
        >
          Submit
        </button>
      </div>
    </main>
  );
}
