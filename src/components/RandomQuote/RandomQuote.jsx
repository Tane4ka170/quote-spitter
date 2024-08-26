import React, { useEffect, useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "../assets/twitter.png";
import reload_icon from "../assets/reload.png";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    async function loadQuotes() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes);
        setSelectedQuote(data.quotes[0]);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    }

    loadQuotes();
  }, []);

  const random = () => {
    if (quotes.length > 0) {
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setSelectedQuote(select);
    }
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}`
    );
  };

  return (
    <div className="container">
      {selectedQuote && (
        <>
          <div className="quote">{selectedQuote.quote}</div>
          <div>
            <div className="line"></div>
            <div className="bottom">
              <div className="author">- {selectedQuote.author}</div>
              <div className="icons">
                <img
                  src={reload_icon}
                  alt="Reload"
                  width={36}
                  height={36}
                  onClick={random}
                />
                <img
                  src={twitter_icon}
                  alt="Tweet"
                  width={36}
                  height={36}
                  onClick={() => {
                    twitter();
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomQuote;
