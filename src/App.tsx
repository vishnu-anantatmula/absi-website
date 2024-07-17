import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/HomeSection/NavBar';
import { Home } from './Pages/Home';
import { useState } from 'react';
import ContactPage from './Components/Contact/ContactPage';
import { CustomerPortal } from './Pages/CustomerPortal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />}>
        <Route index element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route
          path="portal"
          element={<CustomerPortal isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
        <Route
          path="contact"
          element={<ContactPage isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
      </Route>
    </Routes>
  );
}
