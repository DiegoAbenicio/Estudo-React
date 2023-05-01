import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const name = "Bastos";
const el = <p>Hello, {name}</p>;

root.render(
  el, 
  document.getElementById("root")
); 