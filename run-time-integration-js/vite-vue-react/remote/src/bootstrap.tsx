import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function mount(el: ReactDOM.Container) {
  ReactDOM.createRoot(el!).render(<App />);
}

export { mount };
