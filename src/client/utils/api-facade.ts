import axios from 'axios';
import {ITwitterFollowerListResponse} from '../../shared/response';

export function fetchFollowers(userScreenName, followersBatchIndex = -1): Promise<ITwitterFollowerListResponse> {
  return axios.get(`/api/followers/${userScreenName}`, {params: {followersBatchIndex}});
}

export function fetchUser(userScreenName) {
  return axios.get(`/api/user/${userScreenName}`);
}
