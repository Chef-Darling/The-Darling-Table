
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-center max-w-md">We’ve received your inquiry. We’ll be in touch shortly to confirm your event and provide next steps. Thank you for choosing The Darling Table.</p>
      <a href="/" className="mt-6 text-blue-600 underline hover:text-blue-800">Return to homepage</a>
    </div>
  );
}

function PrivateChefWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-12">
      <header className="text-center">
        <div className="flex flex-col items-center">
          <img src="/profile.jpg" alt="Chef Portrait" className="w-40 h-40 rounded-full object-cover shadow-lg mb-4" />
        <h1 className="text-4xl font-bold tracking-wide">The Darling Table Private Chef Services</h1>
        <p className="text-lg mt-2">Luxury Dining Experiences in Airbnbs & Private Homes</p>
      </header>

      {/* All your existing sections remain here... */}

      <footer className="text-center text-sm pt-12 text-gray-600">
        &copy; {new Date().getFullYear()} The Darling Table | House of David Foods
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, priceRange }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm bg-gray-50">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-sm text-gray-600">{priceRange}</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateChefWebsite />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}
