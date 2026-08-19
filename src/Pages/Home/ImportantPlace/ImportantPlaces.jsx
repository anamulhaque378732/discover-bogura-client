import { useLoaderData } from "react-router";
import ImportantPlace from "./ImportantPlace";

const ImportantPlaces = () => {
  const importantPlaces = useLoaderData();

  return (
    <div>
      <h1 className="text-6xl font-bold text-center md:my-8 py-2 md:py-4 my-4 text-secondary">
        Most Popular Place in Bogura
      </h1>
      <div className="grid md:grid-cols-2 mx-auto   lg:grid-cols-3 grid-cols-1 md:gap-6 gap-2">
        {importantPlaces &&
          importantPlaces.map((place) => (
            <ImportantPlace key={place.id} place={place}></ImportantPlace>
          ))}
      </div>
    </div>
  );
};

export default ImportantPlaces;
