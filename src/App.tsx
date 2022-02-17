import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/Auth/AuthContext';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

 export function App() {
  const auth = useContext(AuthContext);
 

  const handleLogout = async () => {
    await auth.signout()
    window.location.href = window.location.href
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site </h1>
        <nav>
          <Link to = '/'>Home</Link>
          <Link to = '/private'>Page Private</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element = { <Home /> } />
        <Route path="/private" element = { <RequireAuth><Private/></RequireAuth> } />
      </Routes>
    </div>
  );
}

