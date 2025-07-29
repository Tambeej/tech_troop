const { post } = require("jquery");

//Ex 1.
async function getUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

//Ex 2.
async function getUserWithPosts(userId) {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!userResponse.ok) {
      throw new Error("User not found");
    }

    const user = await userResponse.json();
    try {
      const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      if (!postResponse.ok) {
        throw new Error("Post not found");
      }

      const posts = await postResponse.json();
      const usersPost = {
        [user.name]: posts,
      };
      console.log(usersPost);
    } catch (error) {
      console.error("Error fetching post:", error.message);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

//Ex 3.

async function createDashboard() {
  const [usersRes, postsRes, commentsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/comments"),
  ]);

  if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const users = await usersRes.json();
  const posts = await postsRes.json();
  const comments = await commentsRes.json();

  const totalUsers = users.length;
  const totalPosts = posts.length;
  const totalComments = comments.length;

  const avgPostsPerUser = totalPosts / totalUsers;
  const avgCommentsPerPost = totalComments / totalPosts;

  const userPostMap = {};
  const userCommentMap = {};

  users.forEach(user => {
    userPostMap[user.id] = [];
  });

  posts.forEach(post => {
    if (userPostMap[post.userId]) {
      userPostMap[post.userId].push(post.id);
    }
  });

  comments.forEach(comment => {
    const postId = comment.postId;
    const post = posts.find(p => p.id === postId);
    if (post && userCommentMap[post.userId] !== undefined) {
      userCommentMap[post.userId] = (userCommentMap[post.userId] || 0) + 1;
    }
  });

  const topUsers = users
    .map(user => {
      const postCount = userPostMap[user.id].length;
      const commentCount = userCommentMap[user.id] || 0;
      return {
        name: user.name,
        postCount,
        commentCount,
      };
    })
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 3);

  const recentPosts = [...posts]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return {
    summary: {
      totalUsers,
      totalPosts,
      totalComments,
      avgPostsPerUser,
      avgCommentsPerPost,
    },
    topUsers,
    recentPosts,
  };
}

createDashboard().then(console.log).catch(console.error);

