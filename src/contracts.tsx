export type Ship = {
  name: string;
  home_port: string;
  image: string;
}

export type Rocket = {
  rocket_name: string;
}

export type LaunchSite = {
  site_name_long: string;
}

export type Launch = {
  mission_name: string;
  launch_date_local: string;
  launch_site: LaunchSite;
  links: {
    article_link: string | null;
    video_link: string | null;
    flickr_images: string[];
  }
  rocket: Rocket;
  ships: Ship[];
  launch_success: boolean;
}
