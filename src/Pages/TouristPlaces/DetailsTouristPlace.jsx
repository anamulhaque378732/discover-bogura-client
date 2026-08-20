import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import {
  FaLocationDot,
  FaCalendarDays,
  FaLandmark,
  FaBus,
  FaCamera,
  FaCompass,
  FaImage,
} from "react-icons/fa6";
import Loading from "../../Components/Loading/Loading";

const DetailsTouristPlace = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: place = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tourist_places", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourist_place/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        <p className="text-xl font-bold">Error loading details!</p>
        <p className="text-sm">{error.message}</p>
        <Link
          to="/touristPlaces"
          className="mt-4 inline-block underline text-gray-700"
        >
          Back to Tourist Places
        </Link>
      </div>
    );
  }

  const {
    name,
    banglaName,
    image,
    category,
    subCategory,
    district,
    upazila,
    location,
    boguraSadarDistance,
    howToGoFromBoguraSadar,
    famousFor = [],
    description,
    bestTimeToVisit,
    activities = [],
    isArchaeological,
    isHistorical,
  } = place;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/touristPlaces"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 mb-6 transition-colors"
      >
        ← Back to Tourist Places
      </Link>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">
        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-2xl overflow-hidden relative mb-8 flex items-center justify-center border border-gray-200">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <FaImage className="text-6xl mb-2" />
              <span className="text-sm">No Image Available</span>
            </div>
          )}

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {isArchaeological && (
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Archaeological Site
              </span>
            )}
            {isHistorical && (
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Historical Place
              </span>
            )}
          </div>
        </div>

        {/* Header Title Section */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
              {category} • {subCategory}
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
            <span>{location || `${upazila}, ${district}`}</span>
            {boguraSadarDistance && (
              <span className="text-gray-400 font-medium">
                • ({boguraSadarDistance})
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-amber-50/60 p-5 rounded-2xl border border-amber-100">
          <div>
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1">
              <FaCalendarDays className="text-amber-600" /> Best Time to Visit
            </h4>
            <p className="text-sm font-semibold text-gray-800">
              {bestTimeToVisit || "Year-round"}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1">
              <FaCamera className="text-amber-600" /> Key Activities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {activities.map((act, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-xs px-2.5 py-1 rounded-md border border-amber-200 font-medium"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed History / Description */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FaCompass className="text-amber-600" /> Overview & History
          </h2>
          <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Travel Guide / Transport Info */}
        {howToGoFromBoguraSadar && (
          <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-2xl mb-8">
            <h3 className="text-amber-900 font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
              <FaBus className="text-amber-600" /> How to Go from Bogura Sadar
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {howToGoFromBoguraSadar}
            </p>
          </div>
        )}

        {/* Famous For List */}
        {famousFor.length > 0 && (
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FaLandmark className="text-amber-600" /> Famous For
            </h3>
            <div className="flex flex-wrap gap-2">
              {famousFor.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200"
                >
                  ✨ {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsTouristPlace;
