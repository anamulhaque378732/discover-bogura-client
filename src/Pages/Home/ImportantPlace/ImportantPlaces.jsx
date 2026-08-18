import ImportantPlace from "./ImportantPlace";

const ImportantPlaces = ({ importantPlaces }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center md:my-8 py-2 md:py-4 my-4 text-secondary">
        Most Popular Government Place in Bogura
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {importantPlaces.map((place) => (
          <ImportantPlace key={place.slug} place={place}></ImportantPlace>
        ))}
      </div>
    </div>
  );
};

export default ImportantPlaces;
