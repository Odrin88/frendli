const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 14},
            {id: 2, message: "How are you?", likeCount: 16},
            {id: 3, message: "Good", likeCount: 19},
            {id: 4, message: "Go play football", likeCount: 12}
        ],
        newPostText: "Add post..."
};


const profileReducer = (state = {initialState}, action) => {
        switch(action.type) {
            case addPost:
                let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
                state.posts.push(newPost);
                state.newPostText = ' ';
                return state;
            case updateNewPostText:
                state.newPostText = action.newText;
                return state;
            default:
                return state;
        }


}

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) =>
    ({type: updateNewPostText, newText: text});

export default profileReducer;