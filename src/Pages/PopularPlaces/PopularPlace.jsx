import { Link } from "react-router";

const PopularPlace = ({ place }) => {
  const {
    _id,
    name,
    banglaName,
    image,
    category,
    location,
    established,
    mainServices,
    isGovernment,
  } = place;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {/* Government Badge */}
        {isGovernment && (
          <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
            Government
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-sm font-medium text-blue-600">{category}</p>

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>

        {/* Bangla Name */}
        <p className="mt-1 text-sm text-gray-500">{banglaName}</p>

        {/* Location */}
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p>
            📍 <span className="font-medium">Location:</span> {location}
          </p>

          <p>
            🏛️ <span className="font-medium">Established:</span> {established}
          </p>
        </div>

        {/* Services */}
        <div className="mt-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-800">
            Main Services
          </h3>

          <div className="flex flex-wrap gap-2">
            {mainServices?.slice(0, 4).map((service, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <Link to={`/${_id}`}>
          <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularPlace;
