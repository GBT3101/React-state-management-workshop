/**
 * IUser - the representation of the user data in the UI components
 * @screenName - Twitter user name
 */
export interface IUser {
  name: string;
  location: string;
  description: string;
  numOfFollowers: number;
  imageSrc: string;
  url: string;
  screenName: string;
}

/**
 * IRawUserData - the representation of the user data that is being received from twitter
 * @screen_name - Twitter user name
 */
export interface IRawUserData {
  name: string;
  location: string;
  description: string;
  followers_count: number;
  profile_image_url: string;
  screen_name: string;
}
