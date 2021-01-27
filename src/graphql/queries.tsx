import { gql } from '@apollo/client';

export const findLaunches = gql`
  query FindLaunches($limit: Int = 10, $offset: Int = 0) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
      }
      ships {
        id
        name
        image
        url
        home_port
      }
      launch_success
    }
  }
`;

export const findShips = gql`
query FindShips($limit: Int = 10, $offset: Int = 0) {
  ships(limit: $limit, offset: $offset) {
    id
    name
    image
    url
    home_port
  }
}
`;
