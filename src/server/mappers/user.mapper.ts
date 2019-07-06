import {IRawUserData, IUser} from '../../shared/user';

export function mapUser(rawDataUser: IRawUserData): IUser {
  return {
    name: rawDataUser.name,
    description: rawDataUser.description,
    imageSrc: rawDataUser.profile_image_url,
    numOfFollowers: rawDataUser.followers_count,
    location: rawDataUser.location,
    screenName: rawDataUser.screen_name,
    url: `https://twitter.com/${rawDataUser.screen_name}`
  };
}
