import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import PoliceStation from "./PoliceStation";

const PoliceStations = () => {
  const axiosSecure = useAxiosSecure();

  const { data: policeStation = [], isLoading } = useQuery({
    queryKey: ["thana"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/thana`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-5xl font-bold my-5 py-5 text-center">
        Police station and fire service office in Bogura
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {policeStation.map((station) => (
          <PoliceStation key={station._id} station={station}></PoliceStation>
        ))}
      </div>
    </>
  );
};

export default PoliceStations;
