interface Card {
  id: number;
  title: string;
  text: string;
  image: string;
}

export default function ServiceCard({ title, text, image, id }: Card) {
  return (
    <>
      <div key={id} className="pb-5 service-card-container">
        <div>
          <img className="w-full" src={image} />
        </div>
        <div>
          <h1 className="py-2 text-lg font-bold font-maven">{title}</h1>
          <span className="font-maven">{text}</span>
        </div>
      </div>
    </>
  );
}
