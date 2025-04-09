import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MySingleOrder from "./MySingleOrder";
import { Slide, toast } from "react-toastify";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState();

  const handleDeleteOrder = (id) => {
    const newOrderList = orders.filter((order) => order._id !== id);
    setOrders(newOrderList);

    axios.delete(`http://localhost:5000/order/${id}`).then((res) => {
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
    axios
      .get(`http://localhost:5000/order?user=${user.email}`)
      .then((res) => setOrders(res.data));
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto my-10 space-y-4">
      {orders?.map((order) => (
        <MySingleOrder
          key={order._id}
          order={order}
          handleDeleteOrder={handleDeleteOrder}
        ></MySingleOrder>
      ))}
    </div>
  );
};

export default MyOrder;
