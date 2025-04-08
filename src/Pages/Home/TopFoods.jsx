import { useEffect, useState } from "react";
import SingleFoodCard from "../Shared/SingleFoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [foods, setFoods] = useState();

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h2 className="text-3xl font-bold font-playfair-display text-center">
        Top <span className="text-red-500">Foods</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-2">
        {foods?.map((food) => (
          <SingleFoodCard key={food._id} food={food}></SingleFoodCard>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="allFoods">
          <button className="btn btn-soft btn-lg bg-red-500 hover:bg-black  border-0 text-white transition-all duration-500">
            All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
