import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import RiverCard from "./RiversCard";

const RiversOfBogura = () => {
  const axiosSecure = useAxiosSecure();

  const { data: rivers = [], isLoading } = useQuery({
    queryKey: ["rivers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/rivers`);
      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold md:my-8 my-3 md:py-4 py-2 text-center">
        Rivers Of Bogura
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rivers.map((river) => (
          <RiverCard key={river._id} river={river}></RiverCard>
        ))}
      </div>
    </>
  );
};

export default RiversOfBogura;
