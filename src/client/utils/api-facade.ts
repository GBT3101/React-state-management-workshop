import axios from 'axios';

export async function fetchFollowers(userId, cursor = -1) {
  return await axios.get(`/api/followers/${userId}`, {params: {cursor}});
}
