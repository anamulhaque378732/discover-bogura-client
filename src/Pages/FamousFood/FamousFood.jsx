import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import FamousFoodCard from "./FamousFoodCard";

const FamousFood = () => {
  const axiosSecure = useAxiosSecure();

  const { data: famousFoods = [], isLoading } = useQuery({
    queryKey: ["famous_food"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/famous_food`);
      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold md:my-8 my-3 md:py-4 py-2 text-center">
        Famous Food in Bogura
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {famousFoods.map((food) => (
          <FamousFoodCard key={food._id} food={food}></FamousFoodCard>
        ))}
      </div>
    </>
  );
};

export default FamousFood;
