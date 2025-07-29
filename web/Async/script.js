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
      let usersPost = `${user.name} ${posts}`;
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

console.log(getUserWithPosts(1));
