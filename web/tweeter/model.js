class Post {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.comments = [];
    this.commentIdCounter = 1;
  }

  _getComments() {
    return this.comments;
  }

  _addComment(text) {
    const commentID = `c${this.commentIdCounter++}`;
    const newComment = {
      id: commentID,
      text,
    };
    this.comments.push(newComment);
  }

  _removeComment(commentID) {
    this.comments = this.comments.filter((c) => c.id !== commentID);
  }
}

class Tweeter {
  constructor() {
    this.posts = [
      new Post("p1", "First post!"),
      new Post("p2", "Aw man, I wanted to be first"),
    ];

    this.posts[0].comments = [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ];
    this.posts[0].commentIdCounter = 4;

    this.posts[1].comments = [
      { id: "c4", text: "Don't worry second poster, you'll be first one day." },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
    ];
    this.posts[1].commentIdCounter = 7;

    this.postIdCounter = 3;
  }

  _getPosts() {
    return this.posts.map((p) => ({
      id: p.id,
      text: p.text,
      comments: [...p.comments],
    }));
  }

  _addPost(text) {
    const newPost = new Post(`p${this.postIdCounter++}`, text);
    this.posts.push(newPost);
  }

  _removePost(postID) {
    this.posts = this.posts.filter((p) => p.id !== postID);
  }

  _addComment(postID, text) {
    const post = this.posts.find((p) => p.id === postID);
    if (post) {
      post._addComment(text);
    }
  }

  _removeComment(postID, commentID) {
    const post = this.posts.find((p) => p.id === postID);
    if (post) {
      post._removeComment(commentID);
    }
  }
}

export default Tweeter;
