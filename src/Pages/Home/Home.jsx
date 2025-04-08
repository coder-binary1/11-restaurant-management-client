import Banner from "./Banner";
import CustomerSay from "./CustomerSay";
import OpeningHour from "./OpeningHour";
import TopFoods from "./TopFoods";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <TopFoods></TopFoods>
      <OpeningHour></OpeningHour>
      <CustomerSay></CustomerSay>
    </div>
  );
};

export default Home;
