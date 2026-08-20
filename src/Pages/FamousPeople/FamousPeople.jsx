import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import FamousPeopleCard from "./FamousPeopleCard";

const FamousPeople = () => {
  const axiosSecure = useAxiosSecure();

  const { data: famousPeople = [], isLoading } = useQuery({
    queryKey: ["famous_people"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/famous_people`);
      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold md:my-8 my-3 md:py-4 py-2 text-center">
        Famous People of Bogura
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {famousPeople.map((people) => (
          <FamousPeopleCard key={people._id} people={people}></FamousPeopleCard>
        ))}
      </div>
    </>
  );
};

export default FamousPeople;
