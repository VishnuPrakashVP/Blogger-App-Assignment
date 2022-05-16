const apiUrl = "http://localhost:3000/posts";

export const getPosts = () => {
  return fetch(apiUrl).then((response) => {
    return response.json();
  });
};

export const addPost = (post) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  }).then((response) => {
    return response.json();
  });
};

export const deletePost = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
};

export const updatePost = (id, newTitle, newBody, newAuthor,newCat) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: newTitle,
      body: newBody,
      author: newAuthor,
      category: newCat,
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log(error));
};
