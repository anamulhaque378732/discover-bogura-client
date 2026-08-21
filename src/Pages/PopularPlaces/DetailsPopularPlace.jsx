import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";

const DetailsPopularPlace = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: place = {}, isLoading } = useQuery({
    queryKey: ["popular_place", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popular_place/${id}`);

      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  const {
    name,
    banglaName,
    image,
    category,
    type,
    district,
    upazila,
    location,
    established,
    description,
    boguraSadarDistance,
    howToGoFromBoguraSadar,
    mainServices,
    contact,
    isGovernment,
  } = place;

  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img src={image} alt={name} className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>

            <p className="mt-3 text-lg">{banglaName}</p>

            {isGovernment && (
              <span className="inline-block mt-4 px-4 py-2 rounded-full bg-green-600 text-white text-sm">
                Government Institution
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>

              <p className="text-gray-600 leading-8">{description}</p>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 mt-6">
              <h2 className="text-2xl font-bold mb-4">Main Services</h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {mainServices?.map((service, index) => (
                  <div key={index} className="bg-base-200 rounded-lg p-3">
                    ✅ {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 mt-6">
              <h2 className="text-2xl font-bold mb-4">How To Reach</h2>

              <p className="text-gray-600 leading-7">
                {howToGoFromBoguraSadar}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Quick Information</h3>

              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Category:</strong> {category}
                </p>

                <p>
                  <strong>Type:</strong> {type}
                </p>

                <p>
                  <strong>Established:</strong> {established}
                </p>

                <p>
                  <strong>District:</strong> {district}
                </p>

                <p>
                  <strong>Upazila:</strong> {upazila}
                </p>

                <p>
                  <strong>Location:</strong> {location}
                </p>

                <p>
                  <strong>Distance:</strong> {boguraSadarDistance}
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>

              <div className="space-y-3">
                <p>📞 {contact?.phone}</p>

                <p>📱 {contact?.mobile}</p>

                <p className="break-all">✉️ {contact?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopularPlace;
