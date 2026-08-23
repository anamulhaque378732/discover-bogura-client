import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import PopularPlace from "./PopularPlace";

const PopularPlaces = () => {
  const axiosSecure = useAxiosSecure();

  const { data: popularPlace = [], isLoading } = useQuery({
    queryKey: ["popular_place"],
    queryFn: async () => {
      const res = await axiosSecure.get("/popular_place");
      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-5 py-5">
        Most Popular Place in Bogura
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularPlace.map((place) => (
          <PopularPlace key={place._id} place={place}></PopularPlace>
        ))}
      </div>
    </div>
  );
};

export default PopularPlaces;
