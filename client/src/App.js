import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/index.js</code> and save to reload.
                    <br />
                    ** DAILY FOCUS **
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <SearchBar />
            </header>
        </div>
    );
}

export default App;
