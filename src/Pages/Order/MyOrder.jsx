import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import MyOrderCard from "./MyOrderCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState();
  const axiosSecure = useAxiosSecure();

  const handleDeleteOrder = (id) => {
    const newOrderList = orders.filter((order) => order._id !== id);
    setOrders(newOrderList);

    axiosSecure.delete(`order/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Order Deleted", {
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
      }
    });
  };

  useEffect(() => {
    axiosSecure
      .get(`order?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setOrders(res.data));
  }, [axiosSecure, user]);

  return (
    <div className="max-w-7xl mx-auto my-10 space-y-4">
      <h2 className="text-4xl font-bold text-center mb-5">My Orders</h2>
      {!orders?.length && <p className="text-center">No Oder Found</p>}
      {orders?.map((order) => (
        <MyOrderCard
          key={order._id}
          order={order}
          handleDeleteOrder={handleDeleteOrder}
        ></MyOrderCard>
      ))}
    </div>
  );
};

export default MyOrder;
