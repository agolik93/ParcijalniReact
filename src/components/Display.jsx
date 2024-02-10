import { useContext } from "react";
import SearchContext from "../context/Context";

const Display = () => {
  const { search, repos, error } = useContext(SearchContext);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (search) {
    return (
      <div>
        <img src={search.avatar_url} alt={search.login} />
        <h3 className=" text-3xl font-bold mb-5">{search.login}</h3>
        <div>
          <span className="text-xl font-bold">Lokacija:</span> {search.location}
        </div>
        <div>
          <span className="text-xl font-bold">Bio:</span> {search.bio}
        </div>
        <div>
          <span className="text-xl font-bold">Repozitorij:</span>
          {Array.isArray(repos) &&
            repos.map((e) => (
              <div key={e.id} className="m-2">
                {e.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default Display;
