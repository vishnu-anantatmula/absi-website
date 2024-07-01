import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/HomeSection/NavBar';
import { Home } from './Pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
