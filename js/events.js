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
  $('form').on('keydown')
}

function pressIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
    return
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
