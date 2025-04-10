import React, { useEffect, useState } from "react";
import SingleFoodCard from "../Shared/SingleFoodCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../Components/Loading";
import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
  const [foods, setFoods] = useState();
  const axiosPublic = useAxiosPublic();

  const count = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
  };

  useEffect(() => {
    axiosPublic
      .get(`allFoods?limit=${itemsPerPage}&page=${currentPage}`)
      .then((res) => setFoods(res.data));
  }, [axiosPublic, itemsPerPage, currentPage]);

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
      <div className="flex justify-between mt-10">
        <div>
          <select
            onChange={handleItemsPerPage}
            value={itemsPerPage}
            className="select focus:outline-0"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={15}>15</option>
            <option value={24}>24</option>
          </select>
        </div>
        <div className="join">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="join-item btn bg-red-400 text-white"
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
