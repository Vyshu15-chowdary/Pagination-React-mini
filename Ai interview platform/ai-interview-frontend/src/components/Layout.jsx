import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with navigation */}
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">AI Interview Platform</h1>
        <nav>
          <Link className="mr-4 hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/interview">Interview</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 p-4 text-center">
        &copy; 2025 AI Interview Platform
      </footer>
    </div>
  );
}
