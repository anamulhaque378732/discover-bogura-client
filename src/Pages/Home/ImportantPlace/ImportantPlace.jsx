import { Link } from "react-router";

const ImportantPlace = ({ place }) => {
  const { name, location, upazila, image, category } = place;

  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt={category} className="rounded-xl opacity-90" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl"> {name}</h2>
        <p className="text-xl"> Upazila: {upazila} </p>
        <p className="text-xl py-2">{location}</p>
        <div className="card-actions">
          <Link>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportantPlace;
