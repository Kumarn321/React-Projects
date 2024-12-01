import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App.jsx';
import Footer from './Footer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer/>
  </StrictMode>,
)
export default App;