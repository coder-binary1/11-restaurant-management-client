import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import SingleCustomerReview from "./SingleCustomerReview";

const CustomerSay = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("fakeReview.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h2 className="text-3xl font-bold font-playfair-display text-center mb-8">
        What Our <span className="text-red-500">Customer</span> Say
      </h2>
      <Marquee>
        <div className="flex py-10">
          {reviews?.map((review) => (
            <SingleCustomerReview
              key={review._id}
              review={review}
            ></SingleCustomerReview>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CustomerSay;
