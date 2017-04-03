//Business Logic
function Place(name,landmarks, activities, notes){
  this.name = name;
  this.landmarks = landmarks;
  this.activities = activities;
  this.notes = notes;
}

//User Interface Logic
$(document).ready(function(){
  $("form#place-form").submit(function(event){
    event.preventDefault();
    var inputPlace = $("input#place-input").val();
    var inputLandmark = $("input#landmark-input").val();
    var inputActivity = $("input#activity-input").val();
    var inputNotes = $("input#notes-input").val();


    // create new place
    var newPlace = new Place(inputPlace, inputLandmark, inputActivity, inputNotes);

    // Display places in list
    $(".places-list").prepend("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").first().click(function(){
      $("#show-place").show();
      $("#show-place h3").text(newPlace.name);
      $(".landmarks").text(newPlace.landmarks);
      $(".activities").text(newPlace.activities);
      $(".notes").text(newPlace.notes);
    });

    $("input#place-input").val("");
    $("input#landmark-input").val("");
    $("input#activity-input").val("");
    $("input#notes-input").val("");
  });
});
