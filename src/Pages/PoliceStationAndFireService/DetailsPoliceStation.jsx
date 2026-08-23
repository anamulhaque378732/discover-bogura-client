import { Link } from "react-router";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserTie,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";

const DetailsPoliceStation = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: station = {}, isLoading } = useQuery({
    queryKey: ["thana", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/thana/${id}`);

      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const {
    name,
    district,
    division,
    country,
    upazila,
    establishmentYear,
    location,
    contact,
    administration,
    coverageArea,
    services,
    description,
    dataSource,
  } = station;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Back Button */}
        <Link
          to="/thana"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-slate-800"
        >
          <FaArrowLeft />
          Back to Police Stations
        </Link>

        {/* Hero */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 shadow-xl">
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
                  <FaShieldAlt size={40} />
                </div>

                <div>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
                    Police Station
                  </span>

                  <h1 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                    {name}
                  </h1>

                  <p className="mt-2 text-gray-300">
                    {upazila}, {district}, {division}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white/10 px-5 py-4 text-center backdrop-blur">
                <p className="text-xs text-gray-300">Emergency</p>

                <p className="mt-1 text-2xl font-bold text-red-300">
                  {contact?.emergency || "999"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* About */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <IoInformationCircle size={24} />
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  About the Police Station
                </h2>
              </div>

              <p className="text-justify leading-8 text-gray-600">
                {description}
              </p>
            </section>

            {/* Services */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-xl font-bold text-gray-800">
                Available Services
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services?.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-green-500" />

                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Coverage Area */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                Coverage Area
              </h2>

              <div className="space-y-3">
                {coverageArea?.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-red-500" />

                    <p className="text-sm leading-6 text-gray-600">{area}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Location */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-gray-800">Location</h2>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-red-500" />

                <div>
                  <p className="text-sm font-medium text-gray-800">Address</p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {location?.address || "Address not available"}
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-gray-800">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Emergency</p>

                    <p className="font-semibold text-gray-800">
                      {contact?.emergency || "999"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Station Officer</p>

                    <p className="font-semibold text-gray-800">
                      {contact?.stationOfficer || "Not available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Investigation Officer
                    </p>

                    <p className="font-semibold text-gray-800">
                      {contact?.investigationOfficer || "Not available"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Administration */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-gray-800">
                Administration
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <FaUserTie className="mt-1 text-slate-600" />

                  <div>
                    <p className="text-xs text-gray-400">Officer in Charge</p>

                    <p className="text-sm font-semibold text-gray-700">
                      {administration?.officerInCharge || "Not available"}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Sanctioned Manpower</p>

                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {administration?.sanctionedManpower ?? "Not available"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Current Manpower</p>

                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {administration?.currentManpower ?? "Not available"}
                  </p>
                </div>
              </div>
            </section>

            {/* Basic Information */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-gray-800">
                Basic Information
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">District</span>
                  <span className="font-medium text-gray-700">{district}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Division</span>
                  <span className="font-medium text-gray-700">{division}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Country</span>
                  <span className="font-medium text-gray-700">{country}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Established</span>
                  <span className="font-medium text-gray-700">
                    {establishmentYear || "Not available"}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Data Source</span>
                  <span className="text-right font-medium text-gray-700">
                    {dataSource || "Not available"}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPoliceStation;
