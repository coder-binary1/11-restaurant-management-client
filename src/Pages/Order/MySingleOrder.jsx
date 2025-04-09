import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";

const MySingleOrder = ({ order, handleDeleteOrder }) => {
  const [food, setFood] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allFood/${order.foodId}`)
      .then((res) => setFood(res.data));
  }, [order]);

  return (
    <div className="flex gap-3 bg-base-200 shadow-sm rounded-lg">
      <figure className="w-32">
        <img className="rounded-l-lg" src={food?.foodImage} alt="Album" />
      </figure>
      <div className="flex pl-2 py-2 pr-4 justify-between grow">
        <div className="">
          <h2 className="font-medium text-xl text-gray-800">
            {order?.foodName}
          </h2>
          <div className="badge badge-soft badge-error">
            {food?.foodCategory}
          </div>
        </div>
        <div className="text-gray-600 space-y-1  mt-2">
          <p>
            Order Date: {moment(order?.orderDate).format("Do MMM  YY, h:mm a")}
          </p>
          <p>Quantity: {order?.totalQuantity}</p>
          <p>
            Price: {order?.totalPrice}
            <span className="font-dancing-script"> Taka</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleDeleteOrder(order._id)}
        className="btn btn-error text-white my-auto mx-5"
      >
        X
      </button>
    </div>
  );
};

export default MySingleOrder;
