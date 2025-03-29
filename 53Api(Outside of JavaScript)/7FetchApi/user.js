function fetchMethod(method, url) {
  return fetch(url, { method: method })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchMethod("GET", "https://dummyjson.com/users")
  .then((userData) => {
    console.log(userData);
    return fetchMethod(
      "GET",
      `https://dummyjson.com/posts/user/${userData.users[0].id}`
    );
  })
  .then((postData) => {
    console.log(postData);
    return fetchMethod(
      "GET",
      `https://dummyjson.com/comments/post/${postData.posts[0].id}`
    );
  })
  .then((commentsData) => {
    console.log(commentsData);
    return fetchMethod(
      "GET",
      `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
    );
  })
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.log(error);
  });
