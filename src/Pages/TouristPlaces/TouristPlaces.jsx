import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import TouristPlaceCard from "./TouristPlaceCard";

const TouristPlaces = () => {
  const axiosSecure = useAxiosSecure();

  const { data: touristPlace = [], isLoading } = useQuery({
    queryKey: ["tourist_place"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourist_place`);
      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold md:my-8 my-3 md:py-4 py-2 text-center">
        Tourist Places in Bogura
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {touristPlace.map((place) => (
          <TouristPlaceCard key={place._id} place={place}></TouristPlaceCard>
        ))}
      </div>
    </>
  );
};

export default TouristPlaces;
