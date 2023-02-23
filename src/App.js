import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
