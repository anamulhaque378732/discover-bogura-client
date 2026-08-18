import { Link } from "react-router";
import map from "../../../assets/map.jpeg";

const About = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center my-2 py-2 ">
        About Bogura
      </h1>
      <div className="grid grid-cols-1 md:mt-8 mt-4 mb-2  md:grid-cols-2 ">
        <section className="mx-2 px-2">
          <p className="text-xl   px-2 py-1">
            Bogura is one of the most historically significant and culturally
            rich districts of Bangladesh. Located in the Rajshahi Division, the
            district is widely known for its ancient heritage, vibrant culture,
            traditional cuisine, and important archaeological sites.
          </p>
          <p className="text-xl px-2 py-1">
            With its strategic location in northern Bangladesh, Bogura has
            played an important role in the history and development of the
            region. The district is home to Mahasthangarh, one of the oldest
            archaeological sites in Bangladesh and a symbol of the area's rich
            historical heritage.
          </p>
          <p className="text-xl px-2   py-1">
            Bogura is also known for its diverse landscape, growing urban
            development, educational institutions, and strong connection to
            agriculture and local traditions. The district is divided into
            several upazilas, each with its own unique history, culture,
            institutions, and places of interest.
          </p>
          <p className="text-xl px-2  py-1">
            From ancient archaeological treasures to modern educational
            institutions, Bogura represents a unique blend of history, heritage,
            culture, and progress.
          </p>
        </section>
        <section>
          <div>
            <img src={map} alt="" />
          </div>
        </section>
      </div>
      <Link
        className="mx-auto flex justify-center md:my-8 my-4  pb-2"
        to="/moreAbout"
      >
        <button className="btn btn-primary md:w-1/3 w-full content-center ">
          More About Bogura
        </button>
      </Link>
    </>
  );
};

export default About;
