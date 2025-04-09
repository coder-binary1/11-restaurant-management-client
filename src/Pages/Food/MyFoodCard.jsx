import { TiEdit } from "react-icons/ti";

const MyFoodCard = ({ myFood, handleEditBtn }) => {
  const {
    foodImage,
    foodName,
    foodCategory,
    foodQuantity,
    foodQuantityType,
    price,
  } = myFood;

  const foodPrice = Math.ceil(price * 10);

  return (
    <div className="flex gap-3 bg-base-200 shadow-sm rounded-lg">
      <figure className="w-32">
        <img className="rounded-l-lg" src={foodImage} alt="Album" />
      </figure>
      <div className="text-gray-600 flex pl-2 py-2 pr-4 justify-between grow">
        <div className="">
          <h2 className="font-medium text-xl text-gray-800">{foodName}</h2>
          <p>Available: {foodQuantity}</p>
          <p>Quantity: {foodQuantityType}</p>
        </div>
        <div className="text-gray-600 space-y-1  mt-2">
          <div className="badge badge-soft badge-error">{foodCategory}</div>
          <p>
            Price: {foodPrice}
            <span className="font-dancing-script"> Taka</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleEditBtn(myFood)}
        className="btn btn-error text-white my-auto mx-5 text-xl"
      >
        <TiEdit />
      </button>
    </div>
  );
};

export default MyFoodCard;
