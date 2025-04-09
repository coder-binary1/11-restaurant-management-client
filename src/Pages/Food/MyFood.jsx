import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodCard from "./MyFoodCard";
import MyFoodUpdate from "./MyFoodUpdate";

const MyFood = () => {
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState();
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allFoods?user=${user?.email}`)
      .then((res) => setMyFoods(res.data));
  }, [user]);

  const handleEditBtn = (food) => {
    setSelectedFood(food);
    document.getElementById("updateFoodModal").showModal();
  };

  console.log(selectedFood);

  return (
    <div className="max-w-7xl mx-auto my-10 space-y-4">
      <h2 className="text-4xl font-bold text-center mb-5">My Foods</h2>
      {myFoods?.map((myFood) => (
        <MyFoodCard
          key={myFood._id}
          myFood={myFood}
          handleEditBtn={handleEditBtn}
        ></MyFoodCard>
      ))}
      <MyFoodUpdate food={selectedFood} />
    </div>
  );
};

export default MyFood;
