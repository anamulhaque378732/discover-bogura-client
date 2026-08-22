import { Link } from "react-router";
import { FaShieldAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const PoliceStation = ({ station }) => {
  const { name, district, upazila, location, contact, services, _id } = station;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
            <FaShieldAlt size={28} />
          </div>

          <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
            Police Station
          </span>
        </div>

        <h2 className="mt-5 text-xl font-bold text-white">{name}</h2>

        <p className="mt-1 text-sm text-gray-300">
          {upazila}, {district}
        </p>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Location */}
        <div className="flex gap-3">
          <FaMapMarkerAlt size={18} className="mt-0.5 shrink-0 text-red-500" />

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Address
            </p>

            <p className="mt-1 line-clamp-2 text-sm text-gray-600">
              {location?.address || "Address not available"}
            </p>
          </div>
        </div>

        {/* Emergency */}
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-red-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
            <FaPhoneAlt size={16} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Emergency</p>

            <p className="font-bold text-red-600">
              {contact?.emergency || "999"}
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-5">
          <p className="mb-3 text-sm font-semibold text-gray-800">
            Main Services
          </p>

          <div className="flex flex-wrap gap-2">
            {services?.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600"
              >
                {service}
              </span>
            ))}

            {services?.length > 3 && (
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
                +{services.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/thana/${_id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-900"
        >
          View Details
          <IoArrowForward
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default PoliceStation;
