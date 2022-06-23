import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SeveranceTheme from './pages/SeveranceTheme/SeveranceTheme';
import DarkTheme from './pages/DarkTheme/DarkTheme';
import RetroTheme from './pages/RetroTheme/RetroTheme';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (

    <BrowserRouter basename="/personal-portfolio/" >
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<DarkTheme />}
        />
        <Route
          path="retro-theme/"
          element={<RetroTheme />}
        />
        <Route
          path="severance-theme/"
          element={<SeveranceTheme />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
