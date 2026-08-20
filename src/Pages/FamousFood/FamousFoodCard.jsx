import { FaImage } from "react-icons/fa";
import { Link } from "react-router";

const FamousFoodCard = ({ food }) => {
  const {
    name,
    category,
    isTraditional,
    banglaName,
    tasteProfile,
    introduction,
    _id,
    image,
  } = food;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100  flex flex-col justify-between p-5 hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-red-300 ">
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
            {category}
          </span>
          {isTraditional && (
            <span className="text-xs font-semibold px-2.5 py-1 bg-red-100 text-red-700 rounded-full">
              Traditional
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          <span className="text-lg font-medium text-gray-500">
            {name}({banglaName})
          </span>
        </h2>

        <div className="flex flex-wrap gap-1.5 my-3">
          {tasteProfile?.map((taste, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
            >
              #{taste}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {introduction}
        </p>
      </div>
      <Link to={`/detailsFood/${_id}`}>
        <button className="w-full mt-2 bg-primary hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FamousFoodCard;
