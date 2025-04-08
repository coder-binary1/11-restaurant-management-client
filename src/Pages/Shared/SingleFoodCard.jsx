const SingleFoodCard = ({ food }) => {
  const { _id, foodName, foodImage, foodCategory, price } = food;
  const foodPrice = Math.ceil(price * 10);

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={foodImage} alt={foodName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-gray-800">{foodName} </h2>
          <div className="badge badge-soft badge-error">{foodCategory}</div>
        </div>
        <p className="text-base font-medium text-gray-600">
          Price: {foodPrice} <span className="font-dancing-script">Taka</span>
        </p>
        <div className="card-actions ">
          <button className="btn bg-gray-800 border-0 hover:bg-red-500 transition-all duration-500 text-white w-full ">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
