import React from 'react';
import { Search, Library } from 'lucide-react';

export const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <Library size={28} />
        <span>Stellar Library</span>
      </div>
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search by title, author, or genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
};
