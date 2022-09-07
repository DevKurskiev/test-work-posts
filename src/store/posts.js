import * as constants from "@store/constants";

const initialState = {
  isLogged: false,
  posts: [],
};

export function getPosts(dispatch) {
  console.log(12345);
  let users;
  let userIds;
  let photos;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      users = json.map((user) => {
        return {
          id: user.id,
          name: user.name,
          companyName: user.company.name,
          posts: [],
          avatar: "",
        };
      });

      userIds = users.map((user) => user.id);
      return fetch("https://jsonplaceholder.typicode.com/posts");
    })
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        var position = userIds?.indexOf(post.userId);
        if (position !== -1) {
          users[position]?.posts.push({
            title: post.title,
            body: post.body,
          });
        }
      });

      return fetch("https://jsonplaceholder.typicode.com/photos");
    })
    .then((response) => response.json())
    .then((json) => (photos = json))
    .then(() => {
      photos.forEach((photo) => {
        var position = userIds.indexOf(photo.albumId);
        if (position !== -1 && !users[position].avatar) {
          users[position].avatar = photo.thumbnailUrl;
        }
      });

      dispatch({
        type: constants.POSTS,
        payload: users
          .map((user) =>
            user.posts.map((post) => ({
              ...post,
              ...user,
            }))
          )
          .flat(),
      });
    });
}

export function postsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constants.LOGIN:
      return {
        ...state,
        isLogged: payload,
      };
    case constants.POSTS:
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
}

export default postsReducer;
