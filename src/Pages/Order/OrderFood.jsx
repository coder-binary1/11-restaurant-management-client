import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const OrderFood = () => {
  const { user } = useAuth();
  const id = useParams();
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState();
  const axiosPublic = useAxiosPublic();

  const food = useLoaderData();

  const [updatePrice, setUpdatePrice] = useState(food?.price);

  const handleUpdatePrice = (value) => {
    setUpdatePrice(food?.price * value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const newData = { ...id, ...initialData };
    const orderQuantity = parseInt(newData.totalQuantity);
    if (food.addedBy.email === newData.buyerEmail) {
      setModalMessage({ message: "You can't order your own food" });
      return document.getElementById("my_modal_1").showModal();
    }
    if (food.foodQuantity < newData.totalQuantity) {
      setModalMessage({
        available: food.foodQuantity,
        message: `You can't order more than ${food.foodQuantity} quantity`,
      });
      return document.getElementById("my_modal_1").showModal();
    }

    axiosPublic.post("order", newData).then((res) => {
      if (res.data?.insertedId) {
        axiosPublic
          .patch(`allFood/${id.foodId}`, {
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
    <div>
      {" "}
      <form onSubmit={handleOrder} className="card-body md:w-1/2 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5">Order now!</h1>
        {!food.foodQuantity && (
          <div
            role="alert"
            className="alert alert-error alert-soft justify-center"
          >
            <span className="text-center">Food is out of stock</span>
          </div>
        )}

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
          <button
            className="btn btn-neutral mt-4"
            disabled={!food.foodQuantity}
          >
            Order
          </button>
        </fieldset>
      </form>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <div className="p-4">
            {modalMessage?.available && (
              <h2 className="text-3xl font-medium">
                Available: {modalMessage?.available}
              </h2>
            )}
            <p className="mt-2 text-error">{modalMessage?.message}</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OrderFood;
