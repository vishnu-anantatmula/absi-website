import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
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
