import { Link, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { HiMapPin } from "react-icons/hi2";

const DetailsFood = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: specificFood = {}, isLoading } = useQuery({
    queryKey: ["famous_food", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/famous_food/${id}`);

      return res.data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  const {
    name,
    banglaName,
    category,
    subCategory,
    district,
    country,
    famousAreas = [],
    isTraditional,
    isFamous,
    keyIngredients = [],
    tasteProfile = [],
    servedAs = [],
    introduction,
    description,
    culturalImportance,
    popularAmong = [],
    availability,
    sources = [],
  } = specificFood;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/famousFood"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 mb-6 transition-colors"
      >
        ← Back to Famous Foods
      </Link>

      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">
        {/* Header Section */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
              {category} • {subCategory}
            </span>
            {isTraditional && (
              <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                Traditional
              </span>
            )}
            {isFamous && (
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                Famous Specialty
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {name}{" "}
            <span className="text-2xl md:text-3xl font-semibold text-gray-500">
              ({banglaName})
            </span>
          </h1>

          <p className="text-gray-500 text-sm">
            <HiMapPin className="text-red-500 inline mr-1" /> Origin:
            <span className="font-medium text-gray-700">
              {district}, {country}
            </span>
          </p>
        </div>

        {/* Quick Info Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-gray-50 p-4 rounded-2xl">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Taste Profile
            </h4>
            <div className="flex flex-wrap gap-1">
              {tasteProfile.map((taste, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-xs font-medium px-2 py-0.5 rounded border border-gray-200"
                >
                  {taste}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Served As
            </h4>
            <div className="flex flex-wrap gap-1">
              {servedAs.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-xs font-medium px-2 py-0.5 rounded border border-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Availability
            </h4>
            <span className="text-sm font-semibold text-gray-800">
              {availability}
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {introduction}
          </p>
        </div>

        {/* Cultural Importance Highlight Box */}
        {culturalImportance && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl mb-8">
            <h3 className="text-amber-900 font-bold text-sm uppercase tracking-wide mb-1">
              Cultural Significance
            </h3>
            <p className="text-amber-800 text-sm md:text-base italic">
              "{culturalImportance}"
            </p>
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            History & Preparation
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Metadata Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
          {/* Key Ingredients */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Key Ingredients</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {keyIngredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Famous Areas & Popularity */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">
              Famous Areas in Bogura
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {famousAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  <HiMapPin className="text-red-500 inline mr-1" /> {area}
                </span>
              ))}
            </div>

            <h3 className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wider  ">
              Popular Among
            </h3>
            <p className="text-xs text-gray-600">{popularAmong.join(", ")}</p>
          </div>
        </div>

        {/* Sources Footer */}
        {sources.length > 0 && (
          <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400">
            <span>Sources & References: {sources.join(" • ")}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsFood;
