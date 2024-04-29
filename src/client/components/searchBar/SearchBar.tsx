import { useLocation, useNavigate } from "react-router-dom";
import "./searchBar.scss";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");
  const navigate = useNavigate();

  const [search, setSearch] = useState(searchQuery || "");

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) {
      navigate(`/items?search=${search}`);
    }
  };

  useEffect(() => {}, [search]);

  return (
    <div className="nav">
      <form className="nav-form" onSubmit={handleOnSubmit}>
        <a className="nav-form__logo" href="//www.mercadolibre.com.mx">
          Mercado Libre México - Donde comprar y vender de todo
        </a>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="nav-form__search"
          type="text"
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit" className="nav-form__button">
          <i className="gg-search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
