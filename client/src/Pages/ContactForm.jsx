import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function ContactForm() {
  let currentURL = window.location.href;
  const [searchParams, setSearchParams] = useSearchParams();

  const nameSearchParam = searchParams.get("name");
  const phoneNumberSearchParam = searchParams.get("phoneNumber");
  const ageNumberSearchParam = searchParams.get("age");
  const emailNumberSearchParam = searchParams.get("email");
  const [name, setName] = useState(nameSearchParam || "");
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberSearchParam || "");
  const [age, setAge] = useState(ageNumberSearchParam || "");
  const [email, setEmail] = useState(emailNumberSearchParam || "");
  const [contactURL, setContactURL] = useState(" ");
  let navigate = useNavigate();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Contact Form</h2>
      <div className="contact-form">
        <label>Name: </label>
        <input
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            searchParams.set("name", e.target.value);
            setSearchParams(searchParams);
          }}
        />
        <label>Phone Number: </label>
        <input
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            searchParams.set("phoneNumber", e.target.value);
            setSearchParams(searchParams);
          }}
        />
        <label>Age: </label>
        <input
          name="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            searchParams.set("age", e.target.value);
            setSearchParams(searchParams);
          }}
        />
        <label>Email: </label>
        <input
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            searchParams.set("email", e.target.value);
            setSearchParams(searchParams);
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
      <div className="generated-URL">
        <div className="contactURL">{contactURL}</div>
        <button
          onClick={() => {
            setContactURL(currentURL);
          }}
        >
          Generate Contact URL
        </button>
      </div>
    </main>
  );
}
