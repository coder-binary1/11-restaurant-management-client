import { Link } from "react-router-dom";
import banner from "../../assets/burger2.png";

const Banner = () => {
  return (
    <div className="hero bg-gray-800 py-10">
      <div className="hero-content flex-col md:flex-row-reverse justify-center">
        <div className="flex-1 ">
          <img src={banner} className="ml-auto  scale-80" />
        </div>
        <div className="flex-1 text-white text-center md:text-left">
          <h1 className="text-5xl md:text-7xl  font-bold font-playfair-display">
            Your <span className="text-red-500 ">Favorite</span> Meals Just A
            Click Away
          </h1>
          <p className="py-6 ">
            Indulge in the comfort of your favorite dishes, delivered straight
            to your door with just a click. Explore our menu and satisfy your
            cravings today!
          </p>
          <Link to="allFoods">
            <button className="btn btn-soft btn-lg bg-red-500 border-0 text-white">
              All Foods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
