import PopularPlaces from "../PopularPlaces/PopularPlaces";
import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <div className="bg-base-200 mt-2">
        <h1 className="text-5xl font-bold text-center my-2 py-5">
          Welcome To The Heritage of Bogura
        </h1>
        <Banner></Banner>
        <About></About>
      </div>
      <section>
        <PopularPlaces></PopularPlaces>
      </section>
    </>
  );
};

export default Home;
