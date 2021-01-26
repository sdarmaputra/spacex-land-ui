import { gql } from '@apollo/client';

export const findLaunches = gql`
  query FindLaunches($limit: Int = 10, $offset: Int = 0) {
    launches(limit: $limit, offset: $offset) {
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
        name
        home_port
        image
      }
      launch_success
    }
  }
`;
