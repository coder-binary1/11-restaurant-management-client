import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleFoodCard from "../Shared/SingleFoodCard";
import axios from "axios";

const AllFoods = () => {
  const [foods, setFoods] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/allFoods")
      .then((res) => setFoods(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <h2 className="text-3xl font-bold font-playfair-display text-center">
        All <span className="text-red-500">Foods</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-2">
        {foods?.map((food) => (
          <SingleFoodCard key={food._id} food={food}></SingleFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
