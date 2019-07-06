import axios from 'axios';
import {ITwitterFollowerListResponse} from '../../shared/response';

export function fetchFollowers(userId, cursor = -1): Promise<ITwitterFollowerListResponse> {
  return axios.get(`/api/followers/${userId}`, {params: {cursor}});
}
