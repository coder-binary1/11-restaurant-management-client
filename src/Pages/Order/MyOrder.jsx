import useAuth from "../../hooks/useAuth";
import { Slide, toast } from "react-toastify";
import MyOrderCard from "./MyOrderCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../../Components/Loading";

const MyOrder = () => {
  const { user } = useAuth();
  // const [orders, setOrders] = useState();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const handleDeleteOrder = async (id) => {
    // const newOrderList = orders.filter((order) => order._id !== id);
    // setOrders(newOrderList);
    const res = await axiosSecure.delete(`order/${id}`);
    return res.data;
  };

  const mutation = useMutation({
    mutationFn: handleDeleteOrder,
    onSuccess: (data) => {
      if (data.deletedCount) {
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
      queryClient.invalidateQueries({ queryKey: ["orders", user?.email] });
    },
  });

  // useEffect(() => {
  //   axiosSecure
  //     .get(`order?email=${user?.email}`)
  //     .then((res) => setOrders(res.data));
  // }, [axiosSecure, user]);

  const {
    isPending,
    isError,
    error,
    data: orders,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      return axiosSecure
        .get(`order?email=${user?.email}`)
        .then((res) => res.data);
    },
  });

  if (isPending || isError) {
    isError && console.log(error);
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl lg:mx-auto my-10 space-y-4 mx-5">
      <h2 className="text-4xl font-bold text-center mb-5">My Orders</h2>
      {!orders?.length && <p className="text-center">No Oder Found</p>}
      {orders?.map((order) => (
        <MyOrderCard
          key={order._id}
          order={order}
          handleDeleteOrder={mutation.mutate}
        ></MyOrderCard>
      ))}
    </div>
  );
};

export default MyOrder;
