// src/components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search Hayes Lab Tools..." }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={styles.searchInput}
      />
      {/* You can add a search button if needed */}
      {/* <button type="submit" style={styles.searchButton}>Search</button> */}
    </form>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  searchForm: {
    margin: '20px 0',
    display: 'flex',
  },
  searchInput: {
    width: '100%',
    padding: '10px 15px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  // searchButton: {
  //   padding: '10px 15px',
  //   fontSize: '1rem',
  //   border: '1px solid #007bff',
  //   backgroundColor: '#007bff',
  //   color: 'white',
  //   borderRadius: '0 4px 4px 0',
  //   cursor: 'pointer',
  // }
};

export default SearchBar;