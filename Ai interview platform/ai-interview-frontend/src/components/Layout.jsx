import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4 text-center font-bold">
        AI Interview Platform
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-300 p-4 text-center">
        &copy; 2025 AI Interview Platform
      </footer>
    </div>
  );
}
