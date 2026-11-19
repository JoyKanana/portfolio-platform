function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="project-search">Search projects</label>
      <input
        id="project-search"
        type="search"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search by title or description..."
      />
    </div>
  );
}

export default SearchBar;