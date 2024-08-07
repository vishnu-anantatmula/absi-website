type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return (
    <h1 className="text-2xl lg:text-4xl text-blue-950 font-semibold lg:font-bold w-80 400:w-96">
      {title}
    </h1>
  );
}
