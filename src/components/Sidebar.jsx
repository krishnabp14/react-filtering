import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [categories, setCategories] = useState([]); // Example categories

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    // Call a function here to apply filters to the main content
  };

  const fetchCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = await response.json();
    setCategories(categories);
  }

  useEffect(() => {
    fetchCategories();
  }, [])


  return (
    <div className="sidebar fixed top-16 left-0 h-full bg-slate-100 p-4 w-1/6">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <div>
        <h4 className="font-bold mb-1">Categories</h4>
        <div className="ml-2">
            {categories.map((category) => (
            <label key={category} className="flex items-center">
                <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-1"
                />
                {category}
            </label>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
