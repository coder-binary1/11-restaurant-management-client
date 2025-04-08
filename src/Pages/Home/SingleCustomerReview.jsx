const SingleCustomerReview = ({ review }) => {
  const {
    customer_image,
    customer_name,
    customer_profession,
    customer_review,
  } = review;

  return (
    <div className="card w-72 ml-6 relative">
      <figure className="absolute left-0 right-0 -top-5">
        <img
          src={customer_image}
          alt={customer_name}
          className="rounded-full w-16 mx-auto"
        />
      </figure>
      <div className="card-body items-center text-center shadow-sm rounded-3xl pt-14 ">
        <h2 className="card-title text-gray-600">{customer_name}</h2>
        <p className="text-red-500 text-base font-dancing-script">
          {customer_profession}
        </p>
        <p className="text-gray-700 ">{customer_review}</p>
      </div>
    </div>
  );
};

export default SingleCustomerReview;
