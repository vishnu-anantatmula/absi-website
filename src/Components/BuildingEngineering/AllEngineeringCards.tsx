import EngineeringCard from './EngineeringCard';
import { engineeringMapArray } from './engineeringMappingArray';

export default function AllEngineeringCards() {
  const allCards = engineeringMapArray.map((item) => {
    return (
      <EngineeringCard
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
