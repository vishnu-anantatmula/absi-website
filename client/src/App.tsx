import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/HomeSection/NavBar';
import { Home } from './Pages/Home';
import { useState } from 'react';
import { Menu } from './Pages/Menu';
import ContactPage from './Components/Contact/ContactPage';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />}>
        <Route
          index
          element={
            isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> : <Home />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
