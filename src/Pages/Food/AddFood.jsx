import useAuth from "../../hooks/useAuth";
import { Slide, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddFood = () => {
  const { user } = useAuth();
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
  const axiosPublic = useAxiosPublic();

  const handleAddFood = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.price = parseFloat(initialData.price);
    initialData.foodQuantity = parseFloat(initialData.foodQuantity);
    const newData = {
      ...initialData,
      addedBy: { user: user.displayName, email: user.email },
    };

    axiosPublic.post("allFoods", newData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Food Added", {
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
        e.target.reset();
      }
    });
  };
  return (
    <form onSubmit={handleAddFood} className="card-body md:w-1/2 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Add Food</h1>

      <fieldset className="fieldset">
        <label className="fieldset-label">Food Name</label>
        <input
          type="text"
          name="foodName"
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
              className="input w-full focus:outline-none"
              placeholder="Food Origin"
              required
            />
          </div>
          <div className="flex-1">
            <label className="fieldset-label flex-1">Food Category</label>
            <select
              defaultValue="choose a category"
              className="select focus:outline-none text-gray-400 font-light"
              name="foodCategory"
            >
              <option disabled={true}>choose a category</option>

              {categories.map((category, idx) => (
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
              className="input w-full focus:outline-none"
              placeholder="Food Quantity Type"
              required
            />
          </div>
        </div>
        <label className="fieldset-label">Description</label>
        <textarea
          name="description"
          className="textarea  w-full focus:outline-none"
          placeholder="Description"
          rows="6"
        ></textarea>
        <button className="btn btn-neutral mt-4">Add</button>
      </fieldset>
    </form>
  );
};

export default AddFood;
