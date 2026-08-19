import { useLoaderData } from "react-router";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBus,
  FaCheckCircle,
  FaHospital,
} from "react-icons/fa";
import OthersNavbar from "../../Shared/OthersNavbar";

const MoreDetailsInPopularPlace = () => {
  const place = useLoaderData();
  const {
    name,
    banglaName,
    image,
    type,
    category,
    location,
    established,
    boguraSadarDistance,
    howToGoFromBoguraSadar,
    mainServices,
    description,
    contact,
    officialSource,
    isGovernment,
  } = place;
  return (
    <>
      {/* <Link to="/">
        <button className="btn">
          <FaArrowLeft />
          Back to Previous Page
        </button>
      </Link> */}

      <OthersNavbar></OthersNavbar>
      <div className="max-w-5xl mx-auto p-4 md:p-6 bg-gray-50 space-y-6">
        {/* 1. Header / Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative h-64 md:h-80 bg-gray-200">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
                {category}
              </span>
              {isGovernment && (
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
                  Government
                </span>
              )}
            </div>
          </div>

          <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {name}
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-1">
              {banglaName}
            </h2>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <div>
                  <p className="text-xs text-gray-400"> Location</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-500 text-xl" />
                <div>
                  <p className="text-xs text-gray-400"> Established </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {established}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaHospital className="text-emerald-500 text-xl" />
                <div>
                  <p className="text-xs text-gray-400"> Type</p>
                  <p className="text-sm font-semibold text-gray-700">{type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Content & Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>

            {/* Main Services */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                MainServices
              </h3>
              <div className="flex flex-wrap gap-2">
                {" "}
                {mainServices.map((service, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-blue-50 text-blue-700 text-sm px-3 py-2 rounded-lg border border-blue-100"
                  >
                    <FaCheckCircle className="text-blue-500 text-xs" />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Transportation / How to Go */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaBus className="text-indigo-600" /> How to Go
              </h3>
              <p className="text-sm text-gray-500 mb-2 font-medium">
                Distance to Bogura Sador {boguraSadarDistance}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200/60">
                {howToGoFromBoguraSadar}
              </p>
            </div>
          </div>

          {/* Sidebar (Right Side) */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Comuinecation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400"> Telephone</p>
                    <a className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">
                      {contact?.phone}
                    </a>
                    <p className="text-xs text-gray-400"> Mobile</p>
                    <a className="text-sm font-semibold text-gray-700 hover:text-blue-600 block">
                      {contact?.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <a className="text-sm font-semibold text-blue-600 break-all">
                      {contact?.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  <span className="font-medium text-gray-600">
                    {officialSource}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDetailsInPopularPlace;
