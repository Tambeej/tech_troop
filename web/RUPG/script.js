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
    })
    .catch((error) => {
      $("#user-name").text("Failed to load user");
      $("#user-address").text("");
      $(".profile-pic").attr("src", "");
      console.error("Failed to fetch user:", error);
    });
}

export function getFriendsNames() {
  const ul = document.querySelector("#friends-list");
  ul.innerHTML = "";
  // Show loading state
  const loadingLi = document.createElement("li");
  loadingLi.textContent = "Loading friends...";
  ul.appendChild(loadingLi);

  const friendPromises = Array.from({ length: 6 }, () =>
    getRandomUser()
      .then((user) => `${user.name.first} ${user.name.last}`)
      .catch(() => "Friend unavailable")
  );

  Promise.all(friendPromises).then((names) => {
    ul.innerHTML = "";
    names.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    });
  });
}

export function getRandomQuote() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#quote-text").text(data["quote"]);
        resolve(data);
      },
      error: function (err) {
        $("#quote-text").text("Failed to load quote.");
        reject(err);
      },
    });
  });
}

export function getRandomPokemon() {
  return new Promise((resolve, reject) => {
    let pokemonId = Math.floor(Math.random() * 1025) + 1;
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/item/${pokemonId}/`,
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#pokemon-name").text(data.name);
        $(".pokemon img").attr("src", data.sprites.default);
        resolve(data);
      },
      error: function (err) {
        $("#pokemon-name").text("Failed to load pokemon name.");
        $(".pokemon img").attr("src", "");
        reject(err);
      },
    });
  });
}

export function getRandomIpsum() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "GET",
      url: `https://baconipsum.com/api/?callback=?`,
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#text-ipsum").text(data[0]);
        resolve(data);
      },
      error: function (err) {
        $("#text-ipsum").text("Failed to load text.");
        reject(err);
      },
    });
  });
}

export async function renderAll() {
  $("#generate-user").prop("disabled", true);
  try {
    await Promise.all([
      getMainPersonData(),
      getFriendsNames(),
      getRandomQuote(),
      getRandomPokemon(),
      getRandomIpsum(),
    ]);
  } catch (e) {
    console.error("One or more requests failed.", e);
  } finally {
    $("#generate-user").prop("disabled", false);
  }
}

$(document).ready(() => {
  $("#generate-user").on("click", renderAll);
});
