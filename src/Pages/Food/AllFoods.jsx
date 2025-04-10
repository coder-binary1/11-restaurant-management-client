import React, { useEffect, useState } from "react";
import SingleFoodCard from "../Shared/SingleFoodCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../Components/Loading";

const AllFoods = () => {
  const [foods, setFoods] = useState();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("allFoods").then((res) => setFoods(res.data));
  }, [axiosPublic]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    axiosPublic
      .get(`allFoods?search=${searchValue}`)
      .then((res) => setFoods(res.data));
  };
  if (!foods) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <h2 className="text-3xl font-bold font-playfair-display text-center">
        All <span className="text-red-500">Foods</span>
      </h2>
      <form onChange={handleSearch} className="card-body md:w-1/2 mx-auto">
        <fieldset className="fieldset">
          <input
            type="text"
            className="input w-full focus:outline-none"
            placeholder="search here"
          />
        </fieldset>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-2">
        {foods?.map((food) => (
          <SingleFoodCard key={food._id} food={food}></SingleFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
