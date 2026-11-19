function FilterButtons({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter-buttons" aria-label="Filter projects by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            selectedCategory === category
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => onSelectCategory(category)}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;