export interface IUser {
  name: string;
  location: string;
  description: string;
  numOfFollowers: number;
  imageSrc: string;
  url: string;
  screenName: string;
}

export interface IRawUserData {
  name: string;
  location: string;
  description: string;
  followers_count: number;
  profile_image_url: string;
  screen_name: string;
}
