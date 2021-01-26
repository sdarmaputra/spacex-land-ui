import formatDate from 'date-fns/format';
import { Launch } from '../contracts';

type LaunchCardProps = {
  launch: Launch
};

export default function LaunchCard({ launch }: LaunchCardProps) {
  const thumbnail = launch.links.flickr_images.length
    ? <img
        src={launch.links.flickr_images[0]}
        alt={launch.mission_name}
        className="rounded-t-lg"
      />
    : (
        launch.links.video_link &&
        <iframe
          title={launch.mission_name}
          src={
            launch.links.video_link
            .replace(/(youtu.be\/|youtube.com\/watch\?v=)/, 'youtube.com/embed/')
          }
          className="rounded-t-lg w-full"
        />
      )
      || null;

  return (
    <div className="h-full box-border shadow-xl rounded-lg bg-white transition duration-300 ease-in-out transform hover:scale-105">
      {thumbnail}
      <div className="p-4 pb-6 mb-6">
        <h2 className="text-2xl font-light">
          {launch.mission_name}
        </h2>
        <small className="text-xs font-light text-gray-600">
          {formatDate(new Date(launch.launch_date_local), 'EEE, d MMM yyyy H:mm (OOO)')}
        </small>
      </div>
    </div>
  )
}
