import { Link, useLocation } from "react-router-dom";

const SingleFoodCard = ({ food }) => {
  const location = useLocation();
  const { _id, foodName, foodImage, foodCategory, price, foodQuantity } = food;
  const foodPrice = Math.ceil(price * 10);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={foodImage} alt={foodName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-gray-700">{foodName} </h2>
          <div className="badge badge-soft badge-error">{foodCategory}</div>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-600 ">
          <p>
            Price: {foodPrice} <span className="font-dancing-script">Taka</span>
          </p>
          {location.pathname === "/allFoods" && (
            <p className="text-right">Available: {foodQuantity}</p>
          )}
        </div>
        <div>
          <Link to={`/allFood/${_id}`}>
            <button className="btn bg-gray-800 border-0 hover:bg-red-500 transition-all duration-500 text-white w-full ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
