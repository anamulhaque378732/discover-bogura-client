import { FaAward, FaImage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const FamousPeopleCard = ({ people }) => {
  const {
    name,
    professions,
    awards,
    birthDate,
    deathDate,
    upazila,
    district,
    _id,
    biography,
    image,
  } = people;
  const birthYear = birthDate ? new Date(birthDate).getFullYear() : "";
  const deathYear = deathDate ? new Date(deathDate).getFullYear() : "Present";

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100 flex flex-col justify-between p-5 hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-red-300">
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
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
            {professions[0] || "Notable Personality"}
          </span>
          {awards.length > 0 && (
            <span className="text-xs font-semibold px-2 py-1 bg-red-100 text-red-700 rounded-full flex items-center gap-1">
              <FaAward /> {awards[0].name}
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold my-2 text-gray-800">{name}</h2>
        {birthYear && (
          <p className="text-xs text-gray-500 font-medium mb-2">
            ({birthYear} - {deathYear})
          </p>
        )}

        {/* অবস্থান */}
        <p className="text-gray-500 text-xs my-2 flex items-center gap-1 mb-3">
          <FaLocationDot className="text-red-500" />
          <span>
            {upazila}, {district}
          </span>
        </p>

        <div className="flex flex-wrap gap-1 mb-3 my-2">
          {professions.slice(0, 3).map((prof, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
            >
              #{prof}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm my-2 line-clamp-2 mb-4">
          {biography}
        </p>
      </div>

      <Link to={`/famousPeople/${_id}`}>
        <button
          disabled={!_id}
          className="w-full mt-2 bg-secondary hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 disabled:bg-gray-300"
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FamousPeopleCard;
