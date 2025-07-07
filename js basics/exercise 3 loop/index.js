const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]
const objectToRemoveId = 2;
const indexToRemove = posts.findIndex(post => post.id === objectToRemoveId);

// If the object is found, remove it using splice()
if (indexToRemove !== -1) {
  posts.splice(indexToRemove, 1);
}

for (let post of posts) {
  console.log(`id: ${post.id} text: ${post.text}`);
}
