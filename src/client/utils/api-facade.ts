import axios from 'axios';

export async function fetchFollowers(userId) {
  return await axios.get(`/api/followers/${userId}`);
}
