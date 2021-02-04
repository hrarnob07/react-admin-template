
import {callToServer} from "./network";

export default {
  getPost: async () => await callToServer("GET", "posts"),
  register: async credentials => await callToServer("POST", "user/create/new", credentials),
  postcreate: async credentials => await callToServer("POST", "user/post/create/new", credentials),
  changePassword: async credentials => await callToServer("PUT", "update/user/info", credentials),
  userIdUniqueCheck: async userID => await callToServer("GET", `user/uid/${userID}/check/availability`),

};