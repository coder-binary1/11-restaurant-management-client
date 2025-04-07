import { useEffect, useState } from "react";
import SingleFoodCard from "../Shared/SingleFoodCard";

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
        Top Foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {foods?.map((food) => (
          <SingleFoodCard key={food._id} food={food}></SingleFoodCard>
        ))}
      </div>
    </div>
  );
};

export default TopFoods;
