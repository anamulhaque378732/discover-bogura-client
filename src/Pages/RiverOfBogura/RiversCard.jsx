import { Link } from "react-router";
import {
  FaLocationDot,
  FaCompass,
  FaCalendarDays,
  FaWater,
  FaLandmark,
} from "react-icons/fa6";

const RiverCard = ({ river = {} }) => {
  const {
    _id,
    name,
    banglaName,
    image,
    category,
    type,
    district,
    upazilas = [],
    location = {},
    boguraSadarDistance,
    famousFor = [],
    description,
    bestTimeToVisit,
    isMajorRiver,
    isHistorical,
  } = river;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 flex flex-col justify-between p-5 hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-cyan-400 group">
      <div>
        {/* ব্যানার ইমেজ বা কালার প্লেসহোল্ডার */}
        <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-100 to-blue-50 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-cyan-600/60">
              <FaWater className="text-5xl mb-1 animate-pulse" />
              <span className="text-xs font-medium">River Landscape</span>
            </div>
          )}

          {/* ব্যাজসমূহ */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {isMajorRiver && (
              <span className="bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                Major River
              </span>
            )}
            {isHistorical && (
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                Historical
              </span>
            )}
          </div>
        </div>

        {/* ক্যাটাগরি ও টাইপ */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-full">
            {category} • {type}
          </span>
        </div>

        {/* নাম ও বাংলা নাম */}
        <h2 className="text-2xl font-bold text-gray-800">
          {name}{" "}
          {banglaName && (
            <span className="text-lg font-medium text-gray-500">
              ({banglaName})
            </span>
          )}
        </h2>

        {/* অবস্থান ও উপজেলাসমূহ */}
        <p className="text-gray-500 text-xs flex items-center gap-1 mt-1 mb-2">
          <FaLocationDot className="text-red-500 shrink-0" />
          <span>
            {location.region || district}
            {upazilas.length > 0 && ` (${upazilas.slice(0, 2).join(", ")}...)`}
          </span>
        </p>

        {/* দূরত্ব তথ্য */}
        {boguraSadarDistance && (
          <p className="text-xs text-gray-400 mb-3 italic">
            📍 {boguraSadarDistance}
          </p>
        )}

        {/* কিসের জন্য বিখ্যাত (Famous For Badges) */}
        <div className="flex flex-wrap gap-1.5 my-3">
          {famousFor?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded flex items-center gap-1"
            >
              <FaLandmark className="text-[10px] text-cyan-600" /> {item}
            </span>
          ))}
        </div>

        {/* সংক্ষিপ্ত বিবরণ */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p>
      </div>

      <div>
        {/* ভ্রমণের সেরা সময় */}
        {bestTimeToVisit && (
          <div className="text-xs text-gray-500 mb-3 flex items-center gap-1.5 bg-cyan-50/60 p-2 rounded-lg border border-cyan-100">
            <FaCalendarDays className="text-cyan-600 shrink-0" />
            <span>
              Best time:{" "}
              <strong className="text-gray-700">{bestTimeToVisit}</strong>
            </span>
          </div>
        )}

        <Link to={`/rivers/${_id}`}>
          <button
            disabled={!_id}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 disabled:bg-gray-300 flex items-center justify-center gap-2"
          >
            <FaCompass /> Explore Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RiverCard;
