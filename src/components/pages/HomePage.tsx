import { useQuery } from '@apollo/client';
import ErrorPlaceholder from '../ErrorPlaceholder';
import LaunchCard from '../LaunchCard';
import ShipCard from '../ShipCard';
import { Launch, Ship } from '../../contracts';
import { findLaunches, findShips } from '../../graphql/queries';

export default function HomePage() {
  const loadingPlaceholder = <div className="py-4">Loading...</div>;

  const {
    loading: launchesLoading,
    error: launchesError,
    data: launchesData,
    refetch: refetchLaunches,
  } = useQuery(findLaunches, {
    variables: {
      limit: 4,
      offset: 0,
    },
  });

  const {
    loading: shipsLoading,
    error: shipsError,
    data: shipsData,
    refetch: refetchShips,
  } = useQuery(findShips, {
    variables: {
      limit: 4,
      offset: 0,
    },
  });

  return (
    <>
      <section className="mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-6">
          Launches
        </h1>
        <div className="flex flex-wrap -mr-4">
          {launchesLoading && loadingPlaceholder}
          {launchesError && <ErrorPlaceholder onRetry={() => refetchLaunches()} />}
          {launchesData && launchesData.launches.map((launch: Launch) =>
            <div key={launch.id} className="lg:w-1/4 md:w-1/3 w-1/2 flex-grow pr-4 pb-4">
              <LaunchCard launch={launch} />
            </div>
          )}
        </div>
      </section>

      <section className="mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-6">
          Ships
        </h1>
        <div className="flex flex-wrap -mr-4">
          {shipsLoading && loadingPlaceholder}
          {shipsError && <ErrorPlaceholder onRetry={() => refetchShips()} />}
          {shipsData && shipsData.ships.map((ship: Ship) =>
            <div key={ship.id} className="lg:w-1/4 md:w-1/3 w-1/2 flex-grow pr-4 pb-4">
              <ShipCard ship={ship} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
