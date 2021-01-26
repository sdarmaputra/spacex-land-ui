import { useQuery } from '@apollo/client';
import LaunchCard from '../LaunchCard';
import { Launch } from '../../contracts';
import { findLaunches } from '../../graphql/queries';


export default function HomePage() {
  const { loading, error, data } = useQuery(findLaunches, {
    variables: {
      limit: 20,
      offset: 0,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Ouch! error</div>;

  const { launches } = data;

  return (
    <section>
      <h1 className="text-3xl font-light text-gray-900 mb-6">
        Launches
      </h1>
      <div className="flex flex-wrap">
        {launches.map((launch: Launch) =>
          <div className="w-1/4 pr-4 pb-4">
            <LaunchCard launch={launch} />
          </div>
        )}
      </div>
    </section>
  );
}
