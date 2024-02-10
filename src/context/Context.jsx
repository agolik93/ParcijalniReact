import { createContext } from "react";
import { useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      if (!res.ok) {
        throw new Error("Korisnik nije pronadjen");
      }
      const data = await res.json();
      setSearch(data);
    } catch (error) {
      setError(error.message);
    }
  }

  async function fetchRes() {
    try {
      const res = await fetch(`https://api.github.com/users/${user}/repos`);
      if (!res) {
        throw new Error("Repozitorij nije pronadjen");
      }
      const data = await res.json();
      setRepos(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <SearchContext.Provider
      value={{
        setUser,
        search,
        repos,
        fetchData,
        fetchRes,
        user,
        error,
        setError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
