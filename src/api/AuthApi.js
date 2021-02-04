import {callToServer} from "./network";

export default {
    login: async credentials => await callToServer('POST', 'verify/user/identity', credentials),
    register: async credentials => await callToServer('POST', 'user/create/new', credentials),
    postcreate: async credentials => await callToServer('POST', 'user/post/create/new', credentials),
    changePassword: async credentials => await callToServer('PUT', 'update/user/info', credentials),
    userIdUniqueCheck: async userID => await callToServer('GET', `user/uid/${userID}/check/availability`),

}
