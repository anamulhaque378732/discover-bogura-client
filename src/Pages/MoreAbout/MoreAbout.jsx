import { useLoaderData } from "react-router";

import Footer from "../../Shared/Footer";

const MoreAbout = () => {
  const data = useLoaderData();

  const {
    name,
    division,
    country,
    area,
    population,
    totalUpazilas,
    shortDescription,
    heroImage,
    mapImage,
    introduction,
    geography,
    highlights,
    famousFood,
    culture,
    history,
    upazilas,
  } = data;

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* district description */}

        <div className="hero bg-base-200   rounded-2xl  mt-4 md:mt-12">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            <img
              alt="Shat matha image"
              src={heroImage}
              className="max-w-sm rounded-lg shadow-2xl  opacity-70"
            />

            <div className="">
              <h1 className="text-5xl my-1 font-bold">
                District Name : {name}
              </h1>
              <h1 className="text-2xl my-1 font-medium">
                Division : {division}
              </h1>
              <h1 className="text-2xl my-1 font-medium">Country : {country}</h1>
              <p className="font-medium my-1"> Area: {area}</p>
              <p className="font-medium my-1"> Population: {population}</p>
              <p className="font-medium my-1">
                Total Upazilas: {totalUpazilas}
              </p>
              <p> {shortDescription}</p>
            </div>
          </div>
        </div>

        {/* district intro and geographic location */}

        <div className="hero bg-base-200 md:mt-12 mt-4 rounded-xl ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt="Tailwind CSS hero component"
              src={mapImage}
              className="max-w-sm rounded-lg opacity-90 shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold"> {introduction?.title} </h1>
              <p className="py-2">{introduction?.description}</p>
              <h1 className="text-5xl py-2 font-bold"> {geography?.title} </h1>
              <p className="py-1">{geography?.description}</p>
              <p className="py-1 font-medium">
                Latitude : {geography?.latitude}
              </p>
              <p className="py-1 font-medium">
                Longitude {geography?.longitude}
              </p>
            </div>
          </div>
        </div>

        {/* history */}

        <div className="hero bg-base-200   rounded-2xl  mt-4 md:mt-12">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            <img
              alt="Shat matha image"
              src={history?.image}
              className="max-w-sm rounded-lg shadow-2xl  opacity-70"
            />

            <div className="">
              <h1 className="text-5xl my-1 font-bold">{history.title}</h1>

              <p className="py-4"> {history?.description}</p>
            </div>
          </div>
        </div>

        {/* highlights */}

        <div className="grid grid-cols-1 md:mt-12 mt-4 gap-4 mb-4  md:mb:8 md:grid-cols-4 ">
          {highlights.map((highlight, index) => (
            <div key={index} className="border p-4 rounded-2xl ">
              <h1 className="text-3xl font-bold"> {highlight?.title} </h1>
              <p className="py-2">{highlight?.description}</p>
            </div>
          ))}
        </div>
        {/* famous food */}

        <div className="hero bg-base-200   rounded-2xl  mt-4 md:mt-12">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            <img
              alt="Shat matha image"
              src={famousFood?.image}
              className="max-w-sm rounded-lg shadow-2xl   "
            />

            <div className="">
              <h1 className="text-5xl my-1 font-bold">{famousFood?.title}</h1>
              <h1 className="text-3xl my-1 font-medium">
                Name: {famousFood?.name}
              </h1>

              <p className="text-xl font-medium"> {famousFood?.description}</p>
            </div>
          </div>
        </div>

        {/* culture in bogura */}

        <div className="hero bg-base-200 md:mt-12 mt-4 rounded-xl ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt="Tailwind CSS hero component"
              src={culture?.image}
              className="max-w-sm rounded-lg opacity-90 shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold"> {culture?.title} </h1>
              <p className="py-4">{culture?.description}</p>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-primary text-center mt-8">
          All Upazilas
        </h1>

        <div className="grid md:grid-cols-3 gap-4 md:mt-12 grid-cols-1">
          {upazilas.map((upazila, index) => (
            <div key={index} className="border rounded-2xl  p-4">
              <h1 className="text-3xl font-bold"> Name: {upazila.name} </h1>
              <p className="py-2"> {upazila.shortDescription} </p>
              <h3 className=" text-xl font-medium">
                Distance : {upazila.distanceFromSadar}
              </h3>
              <h4 className="py-2 text-xl font-medium">
                Location : {upazila.location}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default MoreAbout;
