$(document).ready(function() {

// Initial array of animals
var animals = ["dog", "cat", "bear", "lion"];

// Function to dynamically generate buttons for each animal in the array
function renderButtons() {
$("#buttons-view").empty();
  
    for (var i = 0; i < animals.length; i++) {
      var b = $("<button>");
      b.addClass("animal");
      b.attr("data-name", animals[i]);
      b.text(animals[i]);
      $("#buttons-view").append(b);
    }
    displayGifImages(); 
  }

// Function for retrieving and displaying API image content for each button clicked
function displayGifImages() {
$("button").on("click", function() {    

    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    animal + "&api_key=uKbPHducH3lIMJpS3SQ3Qa3oqhcS4oSO&limit=10&rating=pg";

  $.ajax({
      url: queryURL, 
      method: "GET"
    }).done(function(response) {
  console.log(response);

  $(".imageView").empty();
    
    for (i = 0; i < response.data.length; i++) {
      var animalDisplay = $("<div class='animalDisplay'>");
      var rating = response.data[i].rating;
      var ratingText = $("<p id='rating'>").text("Rating: " + rating + " ");
      var image = $("<img>");
      var imageUrl = response.data[i].images.fixed_height.url;
      var imageStillUrl = response.data[i].images.fixed_height_still.url;

            image.addClass("gif");
            image.attr("src", imageStillUrl);
            image.attr("data-state", "still");
            image.attr("data-still", imageStillUrl);
            image.attr("data-animate", imageUrl);

            $(image).on("click", function() {
                var state = $(this).attr("data-state");
                if (state === "still") {
                 $(this).attr("src", $(this).attr("data-animate"));
                 $(this).attr("data-state", "animate");
                 } else {
                 $(this).attr("src", $(this).attr("data-still"));
                 $(this).attr("data-state", "still");
                 }
                 });

            animalDisplay.append(ratingText);
            animalDisplay.append(image);
            $(".imageView").append(animalDisplay);
      }
  }); 
}
)}

// Adds new buttons with animal names from input 
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var animal = $("#gif-input").val().trim();
    animals.push(animal);
    renderButtons(); 
    $("#gif-input").val("");      
})

// Function for displaying the initial animal data
    renderButtons();
});