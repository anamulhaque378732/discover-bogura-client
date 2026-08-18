import { useLoaderData } from "react-router";
import About from "./About/About";
import Banner from "./Banner/Banner";
import ImportantPlace from "./ImportantPlace/ImportantPlaces";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="bg-base-200 mt-2">
        <h1 className="text-5xl font-bold text-center my-2 py-5">
          Discover the Heritage of Bogura
        </h1>
        <Banner></Banner>
        <About></About>
      </div>
      <section>
        <ImportantPlace importantPlaces={data}></ImportantPlace>
      </section>
    </>
  );
};

export default Home;
