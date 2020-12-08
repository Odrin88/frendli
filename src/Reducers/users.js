const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {id: 1, followed: false, fullName: "Evgeny O.", status: "Success doesn’t come to you…you go to it.", location: {city: "Odesa", country: "Ucraine"} },
        {id: 2, followed: false, fullName: "Igor E.", status: "Everything you can imagine is real.", location: {city: "Moscow", country: "Russia"} },
        {id: 3, followed: true, fullName: "Sveta T.", status: "Everything takes longer than you think.", location: {city: "Kiev", country: "Ucraine"} },
        {id: 4, followed: true, fullName: "Anton B.", status: "True love stories never have endings.", location: {city: "Istanbul", country: "Turkish"} }
    ]

};


const usersReducer = (state = initialState, action) => {
    switch(action.type) {

            return state;
    }
}

export const followActionCreator = () => ({type: FOLLOW});
export const unfollowActionCreator = (text) =>
    ({type: UNFOLLOW, newText: text});

export default usersReducer;