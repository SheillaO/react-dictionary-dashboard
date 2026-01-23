import logo from "./Catalyst_Marketing_Lab_Logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <>
      <header className="py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mt-3 ps-2">
            <img
              src={logo}
              className="brand-logo"
              alt="Catalyst Marketing Lab"
            />
          </div>
        </div>
      </header>
      <main>
        <Dictionary defaultKeyword="Greek" />
      </main>
      <footer className="App-footer">
        <small>
          This is coded by{" "}
          <a
            href="https://github.com/SheillaO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olga
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SheillaO/react-dictionary-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://catalyst-react-dictionary-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </>
  );
}

export default App;
