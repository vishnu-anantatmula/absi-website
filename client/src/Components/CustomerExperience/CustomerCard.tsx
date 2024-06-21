interface card {
  quote: string;
  profileImage: string;
  name: string;
  description: string;
}

export default function CustomerCard({
  quote,
  profileImage,
  name,
  description,
}: card) {
  return (
    <>
      <div className="bg-white p-5 rounded-lg customer-card-container">
        <div className="pb-10">
          <q className="font-maven text-xl font-bold">{quote}</q>
        </div>
        <div className="flex">
          <div className="pr-4">
            <img
              src={profileImage}
              className="shrink-0 h-12 w-12 rounded-full"
            />
          </div>
          <div>
            <h1 className="font-hind text-lg font-medium">{name}</h1>
            <span className="font-maven">{description}</span>
          </div>
        </div>
      </div>
    </>
  );
}
