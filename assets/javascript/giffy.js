$(document).ready(function() {

//renders buttons
function renderButtons() {
  $('#buttons').empty();

  for (var i = 0; i < giffyGifs.length; i++) {

      var newButtons = $("<button class='btn btn-primary btn-lg active'>");
      newButtons.attr("data-gif", giffyGifs[i]);
      newButtons.text(giffyGifs[i]);

      $("#buttons").append(newButton);
  }
}
renderButtons();


var button = $("<input>").attr({type: "button", name: "giffyButton", value:"Dogs"});
    $("#buttons").append(button);


var giffyGifs = ["dog", "cat", "canary", "goldfish", "hermit+crab", "finch", "bearded+dragon", "ferret"];
// Function for dumping the JSON content for each entry into the div
function displayGif() {

    var gifImage = $(this).attr("giffyGif");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giffyGifs + "&api_key=uKbPHducH3lIMJpS3SQ3Qa3oqhcS4oSO&limit=20";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $(".images").innerHTML("<img>", "src="(JSON.stringify(response.preview_gif)));
      renderButtons();
    });
  }

});