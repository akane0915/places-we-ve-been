//Business Logic
function Place(landmarks, activities, notes){
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
    alert(inputPlace + inputLandmark + inputActivity + inputNotes);
  });
});
