import { Routes, Route } from 'react-router-dom';
import Home from './page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
    </Routes>
  );
} 