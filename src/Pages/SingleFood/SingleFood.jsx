import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const food = useLoaderData();

  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    foodOrigin,
    price,
    foodQuantity,
    foodQuantityType,
    description,
    purchaseCount,
  } = food;
  const foodPrice = Math.ceil(price * 10);

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm max-w-7xl mx-auto my-10">
      <figure>
        <img src={foodImage} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl text-gray-800">{foodName} </h2>
          <div className="badge badge-soft badge-error">{foodCategory}</div>
        </div>
        <div className="text-base text-gray-600 space-y-1  mt-2">
          <p>Description: {description}</p>
          <p>Origin: {foodOrigin}</p>
          <p>Selling Count: {purchaseCount || 0}</p>
        </div>
        <div className="text-base text-gray-600 grow space-y-1  mt-2">
          <p>
            Price: {foodPrice} <span className="font-dancing-script">Taka</span>
          </p>
          <p className={foodQuantity ? "text-success" : "text-error"}>
            Available: {foodQuantity} {foodQuantityType}
          </p>
        </div>

        <Link to={`/orderFood/${_id}`}>
          <button className="btn btn-error hover:btn-neutral text-white btn-wide transition-all duration-500">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFood;
