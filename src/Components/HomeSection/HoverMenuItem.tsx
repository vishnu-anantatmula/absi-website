type Props = {
  name: string;
};

export function HoverMenuItem({ name }: Props) {
  const firstElements = ['Commercial HVAC', 'Login'];
  const style = firstElements.includes(name) ? '' : 'rounded-b-xl';
  return (
    <li
      className={`cursor-pointer px-6 py-3 bg-white hover:bg-blue-950 hover:text-white ring-2 ring-white ${style} text-xl shadow-xl tracking-wide hover:tracking-wider`}>
      {name}
    </li>
  );
}
