const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

const postId = 2;
const postIndex = posts.findIndex((post) => post.id === postId);
const post = posts[postIndex];
const objectToRemoveId = 3;

// If the object is found, remove it using splice()
if (post !== -1) {
  const indexToRemove = post.comments.findIndex(
    (comment) => comment.id === objectToRemoveId
  );
  if (indexToRemove !== -1) {
    posts[postIndex].comments.splice(indexToRemove, 1);
  }
}

for (let post of posts) {
  console.log(`id: ${post.id} text: ${post.text}`);
  for(comment of post.comments){
    console.log(comment);
  }
}
