import axios from "axios";
import { Slide, toast } from "react-toastify";

const MyFoodUpdate = ({ food }) => {
  const categories = [
    "American",
    "Bengali",
    "British",
    "Dessert",
    "Greek",
    "Italian",
    "Japanese",
    "Mexican",
    "Middle Eastern",
    "Pasta",
    "Pastry",
    "Peruvian",
    "Thai",
    "Hungarian",
  ];

  const handleFoodUpdate = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const initialData = Object.fromEntries(fromData.entries());
    axios
      .put(`http://localhost:5000/allFood/${food._id}`, initialData)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Food Updated", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          document.getElementById("modalClose").click();
        }
      });
  };

  return (
    <>
      <dialog id="updateFoodModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              id="modalClose"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <form onSubmit={handleFoodUpdate}>
            <h1 className="text-4xl font-bold text-center mb-5">Update Food</h1>

            <fieldset className="fieldset">
              <label className="fieldset-label">Food Name</label>
              <input
                type="text"
                name="foodName"
                defaultValue={food?.foodName}
                className="input w-full focus:outline-none"
                placeholder="Food Name"
                required
              />
              <label className="fieldset-label">
                Food Image URL: (recommended: 500x500 pixel)
              </label>
              <input
                type="url"
                name="foodImage"
                defaultValue={food?.foodImage}
                className="input w-full focus:outline-none"
                placeholder="Food Image URL"
                required
              />
              <div className="flex justify-between gap-2">
                <div className="grow">
                  <label className="fieldset-label">Food Origin</label>
                  <input
                    type="text"
                    name="foodOrigin"
                    defaultValue={food?.foodOrigin}
                    className="input w-full focus:outline-none"
                    placeholder="Food Origin"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="fieldset-label flex-1">Food Category</label>
                  <select
                    value={food?.foodCategory}
                    className="select focus:outline-none text-gray-400 font-light"
                    name="foodCategory"
                  >
                    <option disabled={true}>choose a category</option>

                    {categories?.map((category, idx) => (
                      <option className="font-light" key={idx}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex-1">
                  <label className="fieldset-label">Food Price</label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={food?.price}
                    className="input w-full focus:outline-none"
                    placeholder="Food Price"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="fieldset-label">Food Quantity</label>
                  <input
                    type="number"
                    name="foodQuantity"
                    defaultValue={food?.foodQuantity}
                    className="input w-full focus:outline-none"
                    placeholder="Food Quantity"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="fieldset-label">Food Quantity Type</label>
                  <input
                    type="text"
                    name="foodQuantityType"
                    defaultValue={food?.foodQuantityType}
                    className="input w-full focus:outline-none"
                    placeholder="Food Quantity Type"
                    required
                  />
                </div>
              </div>
              <label className="fieldset-label">Description</label>
              <textarea
                name="description"
                defaultValue={food?.description}
                className="textarea  w-full focus:outline-none"
                placeholder="Description"
                rows="6"
              ></textarea>
              <button className="btn btn-neutral mt-4">Update</button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MyFoodUpdate;
