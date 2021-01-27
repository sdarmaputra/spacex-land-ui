import { Ship } from '../contracts';

type ShipCardProps = {
  ship: Ship
};

export default function ShipCard({ ship }: ShipCardProps) {
  return (
    <div className="h-full box-border shadow-xl rounded-lg bg-white transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src={ship.image}
        alt={ship.name}
        className="rounded-t-lg"
      />
      <div className="p-4 pb-6 mb-6">
        <h2 className="text-2xl font-light">
          {ship.name}
        </h2>
        <small className="text-xs font-light text-gray-600">
          {ship.home_port}
        </small>
      </div>
    </div>
  )
}
