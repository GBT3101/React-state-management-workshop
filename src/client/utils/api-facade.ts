import axios from 'axios';
import {ITwitterFollowerListResponse} from '../../shared/response';

export function fetchFollowers(userScreenName, cursor = -1): Promise<ITwitterFollowerListResponse> {
  return axios.get(`/api/followers/${userScreenName}`, {params: {cursor}});
}

export function fetchUser(userScreenName) {
  return axios.get(`/api/user/${userScreenName}`);
}
