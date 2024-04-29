import "./searchBar.scss";

const SearchBar = () => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = document.querySelector(
      ".nav-form__search"
    ) as HTMLInputElement;
    console.log(search.value);
  };

  return (
    <div className="nav">
      <form className="nav-form" onSubmit={handleOnSubmit}>
        <a className="nav-form__logo" href="//www.mercadolibre.com.mx">
          Mercado Libre México - Donde comprar y vender de todo
        </a>
        <input
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
