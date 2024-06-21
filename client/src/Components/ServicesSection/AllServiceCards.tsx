import { serviceMapArray } from './serviceMappingArray';
import ServiceCard from './ServiceCard';


export default function AllServiceCards() {
  const allCards = serviceMapArray.map((item) => {
    return (
      <ServiceCard
        key={item.key}
        title={item.title}
        text={item.text}
        image={item.image}
        id={item.key}
      />
    );
  });

  return <>{allCards}</>;
}
