import { Slide, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (food) {
      setFormState(food);
    }
  }, [food]);

  const handleFoodUpdate = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const initialData = Object.fromEntries(fromData.entries());
    console.log(initialData);

    return await axiosPublic.put(`allFood/${food._id}`, initialData);
  };

  const mutation = useMutation({
    mutationFn: handleFoodUpdate,
    onSuccess: (data) => {
      if (data.data.modifiedCount) {
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
      queryClient.invalidateQueries({ queryKey: ["myFoods"] });
    },
  });

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
          <form onSubmit={mutation.mutate}>
            <h1 className="text-4xl font-bold text-center mb-5">Update Food</h1>

            <fieldset className="fieldset">
              <label className="fieldset-label">Food Name</label>
              <input
                type="text"
                name="foodName"
                value={formState.foodName || ""}
                onChange={(e) =>
                  setFormState({ ...formState, foodName: e.target.value })
                }
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
                value={formState.foodImage || ""}
                onChange={(e) =>
                  setFormState({ ...formState, foodImage: e.target.value })
                }
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
                    value={formState.foodOrigin || ""}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        foodOrigin: e.target.value,
                      })
                    }
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
                    value={formState.price || ""}
                    onChange={(e) =>
                      setFormState({ ...formState, price: e.target.value })
                    }
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
                    value={formState.foodQuantity || ""}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        foodQuantity: e.target.value,
                      })
                    }
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
                    value={formState.foodQuantityType || ""}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        foodQuantityType: e.target.value,
                      })
                    }
                    className="input w-full focus:outline-none"
                    placeholder="Food Quantity Type"
                    required
                  />
                </div>
              </div>
              <label className="fieldset-label">Description</label>
              <textarea
                name="description"
                value={formState.description || ""}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    description: e.target.value,
                  })
                }
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
