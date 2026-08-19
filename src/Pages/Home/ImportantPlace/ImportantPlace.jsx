import { Link } from "react-router";

const ImportantPlace = ({ place }) => {
  const { name, location, upazila, image, category, id } = place;

  return (
    <div className="card bg-base-200  shadow-sm  border-2 p-4 transition border-primary border-opacity-30 hover:scale-105 hover:border-secondary   group hover:no-underline focus:no-underline  rounded-2xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={category}
          className="rounded-xl hover:scale-110 opacity-90"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl"> {name}</h2>
        <p className="text-xl"> Upazila: {upazila} </p>
        <p className="text-xl py-2">{location}</p>
        <div className="card-actions">
          <Link to={`/moreDetailsInPopularPlace/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportantPlace;
