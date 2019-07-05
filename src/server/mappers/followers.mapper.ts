import {IFollower, IRawFollowerData} from '../../shared/follower';

export function mapFollowers(rawDataFollowers: IRawFollowerData[]): IFollower[] {
  return rawDataFollowers.map(mapFollower);
}

function mapFollower(rawDataFollower: IRawFollowerData): IFollower {
  return {
    name: rawDataFollower.name,
    description: rawDataFollower.description,
    imageSrc: rawDataFollower.profile_image_url,
    url: `https://twitter.com/${rawDataFollower.screen_name}`
  };
}
