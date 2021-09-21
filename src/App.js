import React from "react";
import ThemeMode from "./components/ThemeMode";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as SearchIcon } from "./assets/images/icon-search.svg";
import GithubUser from "./components/User/GithubUser";
import Button from "./components/UI/Button";
import "./App.scss";
const App = () => {
  // useState = listening to changes
  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState({});
  const [error, setError] = React.useState("");
  const [isDark, setDarkMode] = React.useState(false);

  const API = (value) => `https://api.github.com/users/${value}`;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.length) {
      await fetchUser().then(setResult).catch(setError);
    } else {
      setError("Search user");
    }
  };

  async function fetchUser() {
    return new Promise((resolve, reject) => {
      fetch(API(search.replace(/\s/g, ""))).then((res) => {
        const response = res;
        const responsePromise = res.json();
        responsePromise
          .then((data) => {
            if (response.status >= 400) {
              reject("No results");
            } else {
              resolve(data);
              setError("");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  const handleDarkMode = () => {
    if (!isDark) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    setDarkMode(!isDark);
  };

  React.useEffect(() => {
    return () => {
      // Destroy
    };
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="app__header">
          <div className="logo">
            <Logo />
          </div>
          <ThemeMode mode={isDark} onClick={handleDarkMode} />
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
          {result.login && <GithubUser result={result} />}
        </div>
      </div>
    </div>
  );
};

export default App;
