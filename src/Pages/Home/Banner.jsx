import { Link } from "react-router-dom";
import banner from "../../assets/burger2.png";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-gray-800 py-10">
      <div className="hero-content flex-col md:flex-row-reverse justify-center">
        <div className="flex-1 ">
          <motion.img
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src={banner}
            className="ml-auto scale-80"
          />
        </div>
        <div className="flex-1 text-white text-center md:text-left">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-5xl md:text-7xl  font-bold font-playfair-display"
          >
            Your <span className="text-red-500 ">Favorite</span> Meals Just A
            Click Away
          </motion.h1>
          <motion.p
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="py-6 "
          >
            Indulge in the comfort of your favorite dishes, delivered straight
            to your door with just a click. Explore our menu and satisfy your
            cravings today!
          </motion.p>
          <Link to="allFoods">
            <button className="btn btn-soft bg-red-500 hover:bg-black border-0 text-white transition-all duration-500">
              All Foods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
