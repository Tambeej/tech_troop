const fetchItemData = function () {
  let input = $("#item-input").val();

  $.get(`priceCheck/${input}`, function (itemData) {
    $("body").append(`<div>${itemData.price}`);
  });
};

const updateInventory = function () {
  let input = $("#buy-input").val();

  $.get(`buy/${input}`, function (itemData) {
    if (itemData.message) {
      // Handle out of stock or item not found
      $("body").append(
        `<div style="color:red;">${itemData.message}${
          itemData.item ? ` - ${itemData.item.name}` : ""
        }</div>`
      );
    } else {
      $("body").append(
        `<div>Congratulations, you've just bought ${itemData.name} for ${itemData.price}. There are ${itemData.inventory} left now in the store.`
      );
    }
  });
};
