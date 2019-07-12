export interface IFollower {
  id: string;
  name: string;
  screenName: string;
  imageSrc: string;
  description: string;
  url: string;
}

export interface IRawFollowerData {
  id: string;
  name: string;
  description: string;
  profile_image_url: string;
  screen_name: string;
}
