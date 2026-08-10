import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Bogura — Where History Meets Heritage
            </h1>
            <p className="mb-5">
              Explore the rich history, vibrant culture, educational
              institutions, famous personalities, tourist attractions, and
              upazilas of Bogura District.
            </p>
            <p className="text-xl text-secondary font-medium py-1">
              12 Upazilas
            </p>
            <p className="text-xl text-secondary font-medium py-1">
              1000+ Educational Institutions
            </p>
            <p className="text-xl text-secondary font-medium py-1">
              20+ Tourist{" "}
            </p>
            <p className="text-xl text-secondary font-medium py-1">
              Attractions 30+ Notable Personalities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
