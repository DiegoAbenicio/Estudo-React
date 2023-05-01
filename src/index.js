import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
let counter = 0;

function show() {
    counter++;
    const el = <p>{counter}</p>;
    root.render(el, document.getElementById("root"));
}

setInterval(show, 1); 