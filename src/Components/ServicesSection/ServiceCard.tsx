interface Card {
  id: number;
  title: string;
  text: string;
  image: string;
}

export default function ServiceCard({ title, image, id }: Card) {
  return (
    <>
      <div key={id} className="pb-5 service-card-container">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          <h1 className="py-2 text-lg font-bold font-maven">{title}</h1>
        </div>
      </div>
    </>
  );
}
