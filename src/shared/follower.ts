/**
 * IFollower - the representation of the follower data in the UI components
 * @screenName - Twitter user name
 */
export interface IFollower {
  id: string;
  name: string;
  screenName: string;
  imageSrc: string;
  description: string;
  url: string;
}

/**
 * IRawFollowerData - the representation of the follower data that is being received from twitter
 * @screen_name - Twitter user name
 */
export interface IRawFollowerData {
  id: string;
  name: string;
  description: string;
  profile_image_url: string;
  screen_name: string;
}
