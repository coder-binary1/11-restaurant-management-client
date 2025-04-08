import bg from "../../assets/bg.jpg";

const OpeningHour = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero md:min-h-screen"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex-col md:flex-row-reverse gap-24">
        <div className="shadow-2xl shadow-amber-500 p-12 rounded-2xl bg-gray-800">
          <div className="flex-1 text-center text-white uppercase [&>p]:tracking-widest ">
            <h2 className="text-7xl font-extrabold mb-5">Open</h2>
            <p className="">Monday - Friday</p>
            <p>9:00 - 6:00</p>
            <div className="divider divider-error"></div>
            <p>Saturday</p>
            <p>11:00 - 4:00</p>
            <div className="divider divider-warning"></div>
            <p>Closed Sunday</p>
          </div>
        </div>
        <div className="lg:w-1/2 text-white text-center md:text-left ">
          <h1 className="text-5xl md:text-7xl  font-bold font-playfair-display ">
            We <span className="text-red-500 ">Invite</span> You To The
            Restaurant
          </h1>
          <p className="py-6">
            Step into our restaurant and indulge in a delightful dining
            experience, where great food, a warm atmosphere, and exceptional
            service await you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHour;
