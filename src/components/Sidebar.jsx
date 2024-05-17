import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../slices/filterProductsSlice';
import { sortedProducts } from '../utils/sortProducts';
import { fetchProductsSuccess } from '../slices/productSlice';
import { updateSortedOrder } from '../slices/sortOrderSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const savedCategories = localStorage.getItem('selectedCategories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const products = useSelector((store) => store.products);
  const filteredProducts = useSelector((store) => store.filteredProducts);
  const [sortedOrder, selectSortedOrder] = useState(-1);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    localStorage.setItem('selectedCategories', JSON.stringify(updatedCategories));
  };

  const fetchCategories = async () => {
    setCategoriesLoading(true);
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = await response.json();
    setCategories(categories);
    setCategoriesLoading(false);
  }

  const fetchCategoryProducts = async (category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const products = await response.json();
    return products.products;
  }

  const updateFilteredProducts = async (selectedCategories) => {
    let newProducts = [];
    for (const category of selectedCategories) {
        try {
            const products = await fetchCategoryProducts(category);
            newProducts = [...products, ...newProducts];
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    dispatch(setProducts(newProducts));
  }

  const handleSortedOrderChange = (index) => {
    selectSortedOrder(index);
    dispatch(updateSortedOrder(index));
  }

  useEffect(() => {
    updateFilteredProducts(selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="sidebar fixed top-16 left-0 h-full bg-slate-100 p-4 w-1/6">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <div>
        <h4 className="font-bold mb-1">Categories</h4>
        <div className="ml-2">
            {categoriesLoading === true && <div>Categories Loading...</div>}
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

      <div className="mt-2">
        <h4 className="font-bold mb-1">Sorting Order</h4>
        <div className="ml-2">
            <label className="flex items-center">
                <input
                type="radio"
                checked={sortedOrder === 0}
                onChange={() => handleSortedOrderChange(0)}
                className="mr-1"
                />
                {'Price Low - High'}
            </label>
            <label className="flex items-center">
                <input
                type="radio"
                checked={sortedOrder === 1}
                onChange={() => handleSortedOrderChange(1)}
                className="mr-1"
                />
                {'Price High - Low'}
            </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
