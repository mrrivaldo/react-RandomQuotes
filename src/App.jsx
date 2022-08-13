import api from "./api";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="Title-App">
        <h1>Random Quote</h1>
      </header>
      <section>
        <Generator />
      </section>
    </div>
  );
}

function Generator() {
  const [quote, setQuote] = useState("");

  const handleClick = () => {
    getQuote();
  };

  async function getQuote() {
    const response = await api("/random", {
      method: "GET",
    });
    setQuote(response);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container" id="quote-box">
      <div className="quote-text">
        <span id="text">{quote.content}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{quote.author}</span>
      </div>
      <div className="buttons">
        <a class="btn" target="_blank" href="twitter.com/intent/tweet">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <button onClick={handleClick} id="new-quote">
          Generate
        </button>
      </div>
    </div>
  );
}
export default App;
