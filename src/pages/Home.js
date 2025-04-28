// pages/Home.js
import React, { useState, useEffect } from 'react';
import { fetchItems } from '../MockAPI';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  const searchItems = async (query) => {
    if (query.trim() === '') {
      setItems([]);
      return;
    }
    const results = await fetchItems(query);
    setItems(results);
  };

  useEffect(() => {
    searchItems(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <h2 className="mb-4">Home Page</h2>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {searchTerm.trim() !== '' && (
        <div className="row">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><strong>Instructor name:</strong> {item.instructorName}</p>
                    <p className="card-text"><strong>Description:</strong> {item.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
