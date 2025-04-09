import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import { Slide, toast } from "react-toastify";

const OrderFood = () => {
  const { user } = useAuth();
  const id = useParams();
  const navigate = useNavigate();

  const food = useLoaderData();
  const foodPrice = Math.ceil(food?.price * 10);
  const [updatePrice, setUpdatePrice] = useState(foodPrice);

  const handleUpdatePrice = (value) => {
    setUpdatePrice(foodPrice * value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const newData = { ...id, ...initialData };
    const orderQuantity = parseInt(newData.totalQuantity);
    console.log(newData);

    axios.post("http://localhost:5000/order", newData).then((res) => {
      if (res.data?.insertedId) {
        axios
          .patch(`http://localhost:5000/allFood/${id.foodId}`, {
            orderQuantity,
          })
          .then((res) => {
            if (res.data.modifiedCount) {
              toast.success("Purchase Successful", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
              });
              navigate("/myOrder");
            }
          });
      }
    });
  };

  return (
    <form onSubmit={handleOrder} className="card-body md:w-1/2 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Order now!</h1>

      <fieldset className="fieldset">
        <label className="fieldset-label">Food Name</label>
        <input
          type="text"
          name="foodName"
          defaultValue={food?.foodName}
          className="input w-full focus:outline-none"
          placeholder="Food Name"
          readOnly
        />
        <label className="fieldset-label">Price</label>
        <input
          type="number"
          name="totalPrice"
          value={updatePrice}
          className="input w-full focus:outline-none"
          placeholder="Price"
          readOnly
        />
        <label className="fieldset-label">Quantity</label>
        <input
          type="number"
          name="totalQuantity"
          defaultValue={1}
          min="1"
          max={food?.foodQuantity}
          onChange={(e) => handleUpdatePrice(e.target.value)}
          className="input w-full focus:outline-none"
          placeholder="Quantity"
          required
        />
        <label className="fieldset-label">Buyer Name</label>
        <input
          type="text"
          name="buyerName"
          defaultValue={user?.displayName}
          className="input w-full focus:outline-none"
          placeholder="Buyer Name"
          readOnly
        />
        <label className="fieldset-label">Buyer Email</label>
        <input
          type="text"
          name="buyerEmail"
          defaultValue={user?.email}
          className="input w-full focus:outline-none"
          placeholder="Buyer Email"
          readOnly
        />
        <button className="btn btn-neutral mt-4">Order</button>
      </fieldset>
    </form>
  );
};

export default OrderFood;
