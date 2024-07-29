export function HeroImage() {
  return (
    <div className="basis-full sm:basis-1/2">
      <div className="h-full pb-3/5 lg:pb-45/100 relative">
        <img
          src="images/hero.webp"
          className="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
