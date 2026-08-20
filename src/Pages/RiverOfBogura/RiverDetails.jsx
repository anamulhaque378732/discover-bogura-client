import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import {
  FaLocationDot,
  FaCalendarDays,
  FaWater,
  FaLandmark,
  FaRoute,
  FaCamera,
  FaFish,
  FaTree,
  FaCloudSun,
  FaMapLocationDot,
} from "react-icons/fa6";
import Loading from "../../Components/Loading/Loading";

const RiverDetails = () => {
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data: river = {}, isLoading } = useQuery({
    queryKey: ["rivers", id],

    queryFn: async () => {
      const res = await axiosSecure.get(`/rivers/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <Loading />;

  const {
    name,
    banglaName,
    image,
    category,
    type,
    district,
    upazilas = [],
    location = {},
    boguraSadarDistance,
    howToGoFromBoguraSadar = {},
    course = {},
    historicalImportance,
    economicImportance = [],
    environmentalImportance = [],

    nearbyImportantPlaces = [],
    seasonalCondition = {},
    tourismPotential,
    activities = [],
    description,
    bestTimeToVisit,
    isMajorRiver,
    isHistorical,
  } = river;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/rivers"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-cyan-600 mb-6 transition-colors"
      >
        ← Back to Places & Rivers
      </Link>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">
        {/* Banner Image / Water Placeholder */}
        <div className="w-full h-64 md:h-96   from-cyan-100 via-blue-50 to-emerald-50 rounded-2xl overflow-hidden relative mb-8 flex items-center justify-center border border-gray-200">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center text-cyan-700/60">
              <FaWater className="text-7xl mb-2 animate-pulse" />
              <span className="text-sm font-medium">River Landscape</span>
            </div>
          )}

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {isMajorRiver && (
              <span className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Major River
              </span>
            )}
            {isHistorical && (
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Historical River
              </span>
            )}
            {tourismPotential && (
              <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Tourism: {tourismPotential}
              </span>
            )}
          </div>
        </div>

        {/* Header Title Section */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">
              {category} • {type}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {name}{" "}
            {banglaName && (
              <span className="text-2xl md:text-3xl font-semibold text-gray-500">
                ({banglaName})
              </span>
            )}
          </h1>

          <p className="text-gray-600 text-sm flex items-center gap-1.5 mt-2">
            <FaLocationDot className="text-red-500 shrink-0" />
            <span>
              {location.region || district} ({upazilas.join(", ")})
            </span>
          </p>
          {boguraSadarDistance && (
            <p className="text-xs text-gray-400 mt-1 italic">
              📍 {boguraSadarDistance}
            </p>
          )}
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-cyan-50/50 p-5 rounded-2xl border border-cyan-100">
          <div>
            <h4 className="text-xs font-bold text-cyan-900 uppercase tracking-wider mb-2 flex items-center gap-1">
              <FaCalendarDays className="text-cyan-600" /> Best Time to Visit
            </h4>
            <p className="text-sm font-semibold text-gray-800">
              {bestTimeToVisit || "Year-round"}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-cyan-900 uppercase tracking-wider mb-2 flex items-center gap-1">
              <FaCamera className="text-cyan-600" /> Key Activities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {activities.map((act, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-xs px-2.5 py-1 rounded-md border border-cyan-200 font-medium"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description & Historical Importance */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FaWater className="text-cyan-600" /> Overview & Significance
          </h2>
          <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line mb-4">
            {description}
          </p>

          {historicalImportance && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <h3 className="text-amber-900 font-bold text-xs uppercase tracking-wide mb-1">
                Historical Significance
              </h3>
              <p className="text-amber-800 text-sm">{historicalImportance}</p>
            </div>
          )}
        </div>

        {/* Course & Seasonal Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Course */}
          {course.description && (
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                <FaMapLocationDot className="text-cyan-600" /> River Course
              </h3>
              <p className="text-xs font-medium text-cyan-700 mb-1">
                Direction: {course.direction}
              </p>
              <p className="text-xs text-gray-600">{course.description}</p>
            </div>
          )}

          {/* Seasonal Conditions */}
          {seasonalCondition.monsoon && (
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                <FaCloudSun className="text-amber-600" /> Seasonal Flow
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>
                  <strong className="text-gray-700">Monsoon:</strong>{" "}
                  {seasonalCondition.monsoon}
                </li>
                <li>
                  <strong className="text-gray-700">Winter:</strong>{" "}
                  {seasonalCondition.winter}
                </li>
                <li>
                  <strong className="text-gray-700">Summer:</strong>{" "}
                  {seasonalCondition.summer}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Route / How to Go */}
        {howToGoFromBoguraSadar.route && (
          <div className="bg-cyan-50/70 border-l-4 border-cyan-600 p-5 rounded-r-2xl mb-8">
            <h3 className="text-cyan-900 font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
              <FaRoute className="text-cyan-600" /> Travel Route (
              {howToGoFromBoguraSadar.route})
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              <strong className="text-gray-800">Available Transport:</strong>{" "}
              {howToGoFromBoguraSadar.transport?.join(", ")}
            </p>
            <p className="text-xs text-gray-600 italic">
              Approximate Travel Time:{" "}
              {howToGoFromBoguraSadar.approximateTravelTime}
            </p>
          </div>
        )}

        {/* Economic & Environmental Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100 mb-8">
          {/* Economic */}
          {economicImportance.length > 0 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                <FaFish className="text-blue-500" /> Economic Importance
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {economicImportance.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Environmental */}
          {environmentalImportance.length > 0 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                <FaTree className="text-emerald-500" /> Environmental Role
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {environmentalImportance.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Nearby Important Places */}
        {nearbyImportantPlaces.length > 0 && (
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FaLandmark className="text-amber-600" /> Nearby Historical Sites
            </h3>
            <div className="flex flex-wrap gap-2">
              {nearbyImportantPlaces.map((place, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200"
                >
                  📍 {place}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiverDetails;
