import { Link } from "react-router";
import {
  FaLocationDot,
  FaCompass,
  FaCalendarDays,
  FaLandmark,
  FaImage,
} from "react-icons/fa6";

const TouristPlaceCard = ({ place = {} }) => {
  const {
    _id,
    name,
    banglaName,
    image,
    category,
    subCategory,
    upazila,
    district,
    boguraSadarDistance,
    famousFor = [],
    description,
    bestTimeToVisit,
    isArchaeological,
    isHistorical,
  } = place;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 flex flex-col justify-between p-5 hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-amber-400 group">
      <div>
        <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <FaImage className="text-4xl mb-1" />
              <span className="text-xs">No Image Available</span>
            </div>
          )}

          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {isArchaeological && (
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                Archaeological
              </span>
            )}
            {isHistorical && (
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                Historical
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
            {category} • {subCategory}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          {name}
          {banglaName && (
            <span className="text-lg font-medium text-gray-500">
              ({banglaName})
            </span>
          )}
        </h2>

        <p className="text-gray-500 text-xs flex items-center gap-1 mt-1 mb-2">
          <FaLocationDot className="text-red-500 shrink-0" />
          <span>
            {upazila}, {district}
          </span>
          {boguraSadarDistance && (
            <span className="text-gray-400">• ({boguraSadarDistance})</span>
          )}
        </p>

        <div className="flex flex-wrap gap-1.5 my-3">
          {famousFor?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded flex items-center gap-1"
            >
              <FaLandmark className="text-[10px] text-amber-600" /> {item}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p>
      </div>

      <div>
        {bestTimeToVisit && (
          <div className="text-xs text-gray-500 mb-3 flex items-center gap-1.5 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
            <FaCalendarDays className="text-amber-600 shrink-0" />
            <span>
              Best time:{" "}
              <strong className="text-gray-700">{bestTimeToVisit}</strong>
            </span>
          </div>
        )}

        <Link to={`/touristPlaces/${_id}`}>
          <button
            disabled={!_id}
            className="w-full bg-secondary hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 disabled:bg-gray-300 flex items-center justify-center gap-2"
          >
            <FaCompass /> View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristPlaceCard;
