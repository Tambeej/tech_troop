const fetchItemData = function () {
  let input = $("#item-input").val();
  console.log(input);

  $.get(`priceCheck/${input}`, function (itemData) {
    $("body").append(`<div>${itemData.price}`);
  });
};
