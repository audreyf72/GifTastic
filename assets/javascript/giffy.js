$(document).ready(function() {

var button = $("<input/>").attr({type: "button", name: "giffyButtom", value:"Dogs"});
    $(".buttons").append(button);


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dogs&api_key=uKbPHducH3lIMJpS3SQ3Qa3oqhcS4oSO&limit=20");
xhr.done(function(data) { 
    console.log("success got data", data); 
    $(".images").append(JSON.stringify(data));
});

/*for (var i = 0; i < data.length; i++) {
    var gifImage = $("<img>");
    gifImage.addClass("gif-image");
    gifImage.attr("src", data[i]);
    $(".images").append(gifImage);
}*/

});