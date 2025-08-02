import Tweeter from "./model.js";

const Renderer = function () {
  const createCommentHTML = (comment) => {
    return `
    <div class="comment" data-id="${comment.id}">
      <span 
        class="delete-comment" 
        data-id="${comment.id}"
      >x</span>
      <span>${comment.text}</span>
    </div>
  `;
  };

  const createPostHTML = (post) => {
    const commentsHTML = post.comments.map(createCommentHTML).join("");
    return `
      <div class="post" data-id="${post.id}">
        <div class="post-text">${post.text}</div>
        <button class="delete" data-id="${post.id}">Delete Post</button>
        <div class="comments">
          ${commentsHTML}
        </div>
        <input type="text" placeholder="Got something to say?" class="comment-input" data-post-id="${post.id}">
        <button class="comment-button" data-post-id="${post.id}">Comment</button>
      </div>
    `;
  };

  const renderPosts = (posts) => {
    const postsContainer = $("#posts");
    postsContainer.empty();
    if (!Array.isArray(posts)) {
      console.error("Expected posts to be an array");
      return;
    }
    posts.forEach((post) => {
      if (post && post.id && post.text) {
        const postHTML = createPostHTML(post);
        postsContainer.append(postHTML);
      }
    });
  };

  return { renderPosts };
};

const tweeter = new Tweeter();
const renderer = Renderer();

// This should render the initial dummy data
renderer.renderPosts(tweeter._getPosts());

export default Renderer;
