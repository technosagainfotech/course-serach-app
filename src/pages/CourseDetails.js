import React, { useState, useEffect } from 'react';
import { fetchItems } from '../MockAPI'; // fruit mock data

const CourseDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllFruits = async () => {
      const results = await fetchItems(''); // fetch all without filter
      setItems(results);
    };

    getAllFruits();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Course Collection</h2>

      <div className="row">
        {items.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;

