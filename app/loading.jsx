"use client";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loader-circle">
        <img src="/images/logo.png" alt="Crea8haus Logo" />
      </div>
      <h2 className="loading-text">Crea8haus</h2>
    </div>
  );
}
