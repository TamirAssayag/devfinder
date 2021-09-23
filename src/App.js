import React from "react";
import ThemeMode from "./components/ThemeMode";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as SearchIcon } from "./assets/images/icon-search.svg";
import GithubUser from "./components/User/GithubUser";
import Button from "./components/UI/Button";
import "./App.scss";
import axios from "axios";

const App = () => {
  // useState = listening to changes
  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState({});
  const [error, setError] = React.useState("");
  const [isDark, setIsDarkMode] = React.useState(false);
  const [isUser, setIsUser] = React.useState(false);

  const API = (value) => `https://api.github.com/users/${value}`;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length) {
      fetchUser();
    } else {
      setError("Search user");
    }
  };

  async function fetchUser() {
    try {
      const response = await axios.get(API(search.replace(/\s/g, "")));
      setResult(response.data);
      setIsUser(true);
      setError("");
    } catch {
      setError("No results");
      setIsUser(false);
    }
  }

  const handleTheme = () => {
    if (!isDark) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    setIsDarkMode(!isDark);
  };

  React.useEffect(() => {
    return () => {};
  });

  return (
    <div className="app">
      <div className="container">
        <div className="app__header">
          <div className="logo">
            <Logo />
          </div>
          <ThemeMode mode={isDark} onClick={() => handleTheme()} />
        </div>

        <form className="app__search">
          <SearchIcon />
          <div className="app__search--input">
            <input
              type="text"
              placeholder="Search Github username..."
              onChange={handleChange}
            />
          </div>
          <p className="err-message">{error ? error : ""}</p>
          <div className="app__search--button">
            <Button onClick={handleSearch} className="btn--search">
              Search
            </Button>
          </div>
        </form>
        <div className="user">
          {result.login && <GithubUser result={result} user={isUser} />}
        </div>
      </div>
    </div>
  );
};

export default App;
