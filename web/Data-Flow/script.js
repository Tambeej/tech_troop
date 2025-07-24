const posts = [
  { name: "Tamar", text: "Happy birthday!" },
  { name: "Lior", text: "Congrats!" }
];

const render = () => {
  const container = document.getElementById("postsContainer");
  container.innerHTML = ""; 

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.textContent = `${post.name}: ${post.text}`;
    container.appendChild(postDiv);
  });
};

document.getElementById("postBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const text = document.getElementById("textInput").value.trim();

  if (name && text) {
    posts.push({ name, text });
    render();
    document.getElementById("nameInput").value = "";
    document.getElementById("textInput").value = "";
  }
});

render(); 
