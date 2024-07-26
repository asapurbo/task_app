// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSearch } from '../../../features/filter/filterSlice'

const Nav = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()

  function searchs(fn, durtion) {
    let timeOut;

    return (value) => {
      clearTimeout(timeOut);

      timeOut = setTimeout(() => {
        fn(value);
      }, durtion);
    };
  }

  function sh(value) {
    dispatch(onSearch(value))
  }

  const heandleSearch = searchs(sh, 500);
  searchs;
  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="w-16">
          <img src={logo} />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input text-black"
            id="lws-searchTask"
            value={search}
            onChange={(e) => {
              return (heandleSearch(e.target.value),setSearch(e.target.value))
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
