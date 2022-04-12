import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <div className="searchBar">
      <div>
        <input
          type="text"
          placeholder="Search City"
          maxLength="50"
          value={props.city}
        />
        <a>
          <button>Search</button>
        </a>
      </div>
    </div>
  );
};

export default Search;
