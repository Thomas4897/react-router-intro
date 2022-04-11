import { Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Contact</h2>
      <Outlet />
    </main>
  );
}
