import logo from "./Catalyst_Marketing_Lab_Logo.png";
import "./App.css";

function App() {
  return (
    <header className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-3 ps-2">
          <img src={logo} className="brand-logo" alt="Catalyst Marketing Lab" />
        </div>
      </div>
    </header>
  );
}

export default App;
