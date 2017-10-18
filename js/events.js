//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img')[0].className = "tasty"
  })
}

function submitIt() {

}

function pressIt() {
  $("form").on("submit", function() {
    
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
