import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodCard from "./MyFoodCard";
import MyFoodUpdate from "./MyFoodUpdate";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";

const MyFood = () => {
  const { user } = useAuth();
  // const [myFoods, setMyFoods] = useState();
  const [selectedFood, setSelectedFood] = useState(null);
  const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   axiosSecure
  //     .get(`allFoods?email=${user?.email}`)
  //     .then((res) => setMyFoods(res.data));
  // }, [axiosSecure, user]);

  const {
    isPending,
    isError,
    data: myFoods,
  } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`allFoods?email=${user?.email}`);
      return res.data;
    },
  });

  const handleEditBtn = (food) => {
    setSelectedFood(food);
    document.getElementById("updateFoodModal").showModal();
  };

  if (isPending || isError) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl lg:mx-auto my-10 space-y-4 mx-5">
      <h2 className="text-4xl font-bold text-center mb-5">My Foods</h2>
      {!myFoods?.length && <p className="text-center">No Food Found</p>}
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
