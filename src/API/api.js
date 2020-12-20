import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "760aba0f-5e1d-4fb6-bef2-b3b15312dea4"
    }

});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `)
            .then(response => {
                return response.data
            });
    },

follow (userId) {
     return instance.post(`follow/${userId}`)
    },
unfollow (userId) {
     return instance.delete(`follow/${userId}`)
    },
getProfile (userId) {
    console.warn('Please profileAPI object')
    return profileAPI.getProfile(userId);
}

}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/`+ userId);
    },
    getUsersStatus (userId) {
        return instance.get(`profile/status/`+ userId);
    },
    updateUsersStatus (status) {
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}


