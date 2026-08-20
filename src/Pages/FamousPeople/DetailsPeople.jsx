import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import {
  FaLocationDot,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaCalendarDays,
  FaBookOpen,
  FaLandmark,
} from "react-icons/fa6";
import Loading from "../../Components/Loading/Loading";

const DetailsPeople = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: person = {}, isLoading } = useQuery({
    queryKey: ["famous_people", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/famous_people/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <Loading />;

  const {
    name,
    image,
    birthDate,
    birthPlace,
    deathDate,
    deathPlace,
    upazila,
    district,
    country,
    professions = [],

    education = [],
    majorPositions = [],
    awards = [],
    majorContributions = [],
    organizations = [],
    notableWorksOrPolicies = [],
    biography,
    sources = [],
  } = person;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/famousPeople"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 mb-6 transition-colors"
      >
        ← Back to Famous People
      </Link>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-100 pb-8 mb-8">
          {/* Profile Image / Avatar */}
          <div className="w-full md:w-48 h-56 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 border border-gray-200">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <FaUser className="text-6xl mb-2" />
                <span className="text-xs">No Image</span>
              </div>
            )}
          </div>

          {/* Core Details */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              {professions.map((profession, index) => (
                <span
                  key={index}
                  className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {profession}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
              {name}
            </h1>

            <p className="text-gray-600 text-sm flex items-center gap-1.5 mb-2">
              <FaLocationDot className="text-red-500" />
              <span>
                {upazila ? `${upazila}, ` : ""}
                {district}, {country}
              </span>
            </p>

            <p className="text-gray-500 text-xs flex items-center gap-1 mb-4">
              <FaCalendarDays className="text-gray-400" />
              <span>
                Born: {birthDate || "N/A"} {deathDate && `• Died: ${deathDate}`}
              </span>
            </p>

            {/* Awards Line */}
            {awards.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Honors:
                </span>
                {awards.map((award, idx) => (
                  <span
                    key={idx}
                    className="bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1"
                  >
                    <FaAward /> {award.name} ({award.year})
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Facts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-5 rounded-2xl">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <FaCalendarDays /> Life & Location
            </h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Birth Place:</span>{" "}
                {birthPlace || "N/A"}
              </li>
              {deathPlace && (
                <li>
                  <span className="font-semibold">Death Place:</span>{" "}
                  {deathPlace}
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <FaBriefcase /> Organizations & Roles
            </h4>
            <div className="flex flex-wrap gap-1">
              {organizations.map((org, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-xs px-2 py-1 rounded border border-gray-200 font-medium"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Biography */}
        {biography && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FaBookOpen className="text-amber-600" /> Biography
            </h2>
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {biography}
            </p>
          </div>
        )}

        {/* Two-Column Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
          {/* Key Roles & Positions */}
          <div>
            {majorPositions.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FaLandmark className="text-red-500" /> Major Positions
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {majorPositions.map((pos, idx) => (
                    <li key={idx}>{pos}</li>
                  ))}
                </ul>
              </div>
            )}

            {education.length > 0 && (
              <div>
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FaGraduationCap className="text-blue-500" /> Education
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {education.map((edu, idx) => (
                    <li key={idx}>{edu}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contributions & Policy */}
          <div>
            {majorContributions.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-2">
                  Major Contributions
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {majorContributions.map((contrib, idx) => (
                    <li key={idx}>{contrib}</li>
                  ))}
                </ul>
              </div>
            )}

            {notableWorksOrPolicies.length > 0 && (
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Notable Works / Policies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {notableWorksOrPolicies.map((work, idx) => (
                    <span
                      key={idx}
                      className="bg-red-50 text-red-700 text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {work}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sources Footer */}
        {sources.length > 0 && (
          <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400">
            <span>Sources: {sources.join(" • ")}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPeople;
