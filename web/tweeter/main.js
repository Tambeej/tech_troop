import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = new Tweeter();
const renderer = Renderer();

const render = () => {
  renderer.renderPosts(tweeter._getPosts());
};

render();

// Add Tweet
$("#tweet-btn").on("click", tweet);
$("#post-input").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    tweet();
  }
});

function tweet() {
  const input = $("#post-input").val().trim();
  if (input) {
    tweeter._addPost(input);
    $("#post-input").val("");
    render();
  }
}

// Delete post
$("#posts").on("click", "button[data-id]", function () {
  const postID = $(this).data("id");
  if ($(this).text() === "Delete Post") {
    tweeter._removePost(postID);
    render();
  }
});

// Add comment
$("#posts").on("click", ".comment-button", addComment);
$(".comment-input").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    addComment($(this));
  }
});
function addComment(e) {
  const postID = e.data("post-id");
  const commentInput = $(`.comment-input[data-post-id="${postID}"]`);
  const text = commentInput.val().trim();
  if (text) {
    tweeter._addComment(postID, text);
    commentInput.val("");
    render();
  }
}

// Delete comment
$("#posts").on("click", ".delete-comment", function () {
  const commentID = $(this).data("id");
  const postID = $(this).closest(".post").data("id");
  tweeter._removeComment(postID, commentID);
  render();
});
