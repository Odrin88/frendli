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
    return instance.get(`profile/`+ userId);
}


}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}


