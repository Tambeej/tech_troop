export function getRandomUser() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function (data) {
        resolve(data.results[0]);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}

export function getMainPersonData() {
  getRandomUser()
    .then((user) => {
      $("#user-name").text(`${user.name.first} ${user.name.last}`);
      $("#user-address").text(
        `${user.location.city}, ${user.location.country}`
      );
      $(".profile-pic").attr("src", user.picture.large);
      getFriendsNames();
    })
    .catch((error) => {
      console.error("Failed to fetch user:", error);
    });
}

export function getFriendsNames() {
  const ul = document.querySelector("#friends-list");
  ul.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    getRandomUser()
      .then((user) => {
        const newFriend = document.createElement("li");
        newFriend.textContent = `${user.name.first} ${user.name.last}`;
        ul.appendChild(newFriend);
      })
      .catch((error) => {
        console.error("Failed to fetch user's friends:", error);
      });
  }
}

$(document).ready(() => {
  $("#generate-user").on("click", getMainPersonData);
});
