interface card {
  quote: string;
  name: string;
}

export default function CustomerCard({ quote, name }: card) {
  return (
    <>
      <div className="bg-white p-5 flex flex-wrap  rounded-lg customer-card-container">
        <div className="pb-10">
          <q className="font-maven text-xl font-bold">{quote}</q>
        </div>
        <div className="flex items-end">
          <div>
            <h1 className="font-hind text-lg font-medium align-text-bottom">
              - {name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
